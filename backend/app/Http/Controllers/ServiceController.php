<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\ServiceKey;
use App\Models\Technology;
use App\Models\ServicePages;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\ServiceResource;
use App\Http\Resources\TopServiceResource;
use App\Http\Resources\ServicePageResource;

class ServiceController extends Controller
{
    public function service()
    {
        return view('cms.Service.service');
    }

    public function showservice(Request $request)
    {
        $search = $request->input('search');

        if($search) {
            $services = Service::where('name', 'like', '%' . $search . '%')
            ->with('serviceKeys')
            ->get();
        } else {
            $services = Service::with('serviceKeys')->get();
        }

        // Query untuk mendapatkan data teknologi terkait dengan service
        $serviceTech = DB::table('service_technologies')
            ->select('services.name as service_name', 'technologies.name as tech_name', 'technologies.icon')
            ->join('technologies', 'service_technologies.technologies_id', '=', 'technologies.id')
            ->join('services', 'service_technologies.services_id', '=', 'services.id')
            ->get();

            
        return view('cms.Service.service', compact('services'));
    }

    public function deleteService($id)
    {
        $services = Service::findOrFail($id);

        ServiceKey::where('services_id', $id)->delete();

        $services->technologies()->detach();

        $services->delete();

        return redirect()->route('service')->with('success', 'Service has been deleted successfully.');
    }

    public function create()
    {
        $technologies = Technology::all();
        $service = new Service();
        $isTopServiceOptions = [
            'true' => 'Yes',
            'false' => 'No',
        ];

        return view('cms.Service.add', compact('technologies', 'service', 'isTopServiceOptions'));
    }

    public function store(Request $request)
    {
        // Validasi data yang diterima dari formulir
        $request->validate([
            'name' => 'required|string|max:255',
            'desc' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'technologies' => 'required|array',
            'serviceKeys' => 'required|array',
            'isTopService' => Rule::in(['true', 'false']),
        ]);

        if ($request->hasFile('image')) {
            $serviceImage = $request->file('image');
            $serviceImageName = $serviceImage->getClientOriginalName();
            $serviceImage->move('img/service', $serviceImageName);
            $serviceImagePath = '/img/service/' . $serviceImageName;
        }

        $isTopService = $request->input('isTopService');

        // Simpan data service ke database
        $service = new Service([
            'name' => $request->name,
            'desc' => $request->desc,
            'image' => url($serviceImagePath),
            'isTopService' => $isTopService,
        ]);

        $service->save();

        // Menyimpan teknologi terkait dengan portofolio
        $selectedTechnologies = $request->input('technologies', []); // Ambil array teknologi yang dipilih
        $service->technologies()->attach($selectedTechnologies); // Menyambungkan teknologi yang dipilih dengan portofolio

        // Proses deliverables
        $serviceKeys = $request->input('serviceKeys');
        if (!empty($serviceKeys)) {
            foreach ($serviceKeys as $serviceKey) {
                ServiceKey::create([
                    'name' => $serviceKey,
                    'services_id' => $service->id,
                ]);
            }
        }

        // Redirect ke halaman yang sesuai atau tampilkan pesan sukses
        return redirect()->route('service')->with('success', 'Service added successfully.');
    }

    public function edit($id)
    {
        $service = Service::findOrFail($id);
        $technologies = Technology::all();
        $selectedTechnologies = $service->technologies->pluck('id')->toArray();

        $isTopServiceOptions = [
            'true' => 'Yes',
            'false' => 'No',
        ];

        return view('cms.Service.edit', compact('service', 'technologies', 'selectedTechnologies', 'isTopServiceOptions'));
    }

    public function update(Request $request, $id)
    {
        $service = Service::findOrFail($id);

        // Validasi data yang akan diupdate
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'desc' => 'required|string',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            'technologies' => 'required|array',
            'isTopService' => 'required|in:true,false',
        ]);

        //update data service
        $service->name = $request->input('name');
        $service->desc = $request->input('desc');
        $service->isTopService = $request->input('isTopService');

        // // Simpan perubahan pada data service
        $service->save();

        // Update teknologi terkait dengan service
        $selectedTechnologies = $request->input('technologies', []); // Ambil array teknologi yang dipilih
        $service->technologies()->sync($selectedTechnologies); // Synchronize teknologi yang dipilih

        // Periksa apakah ada file gambar yang diupload
        if ($request->hasFile('image')) {
            $serviceImage = $request->file('image');
            $serviceImageName = $serviceImage->getClientOriginalName();
            $serviceImage->move('img/service', $serviceImageName);
            $serviceImagePath = '/img/service/' . $serviceImageName;

            // Update path gambar service
            $service->image = url($serviceImagePath);
            $service->save();
        }

        // Redirect ke halaman service dengan pesan sukses
        return redirect()->route('service')->with('success', 'Service updated successfully.');
    }

    public function addTechnology(Request $request, $id)
    {
        $service = Service::findOrFail($id);
        $technologyId = $request->input('technology_id');

        // Cek apakah teknologi tersebut sudah ada dalam service
        if (!$service->technologies->contains($technologyId)) {
            // Jika belum ada, tambahkan teknologi ke service
            $service->technologies()->attach($technologyId);
        }

        return redirect()->route('service-edit', ['id' => $service->id])->with('success', 'Technology added to service successfully');
    }

    public function deleteTechnologyInService($id, $technology_id)
    {
        try {
            // Temukan layanan berdasarkan $id
            $service = Service::findOrFail($id);

            // Temukan teknologi berdasarkan $technology_id
            $technology = Technology::findOrFail($technology_id);

            // Lepaskan teknologi dari layanan
            $service->technologies()->detach($technology);

            return redirect()->route('service')->with('success', 'Technology deleted successfully');
        } catch (\Exception $e) {
            // Tangani kesalahan yang mungkin terjadi selama proses
            return redirect()->route('service')->withErrors(['error' => 'Failed to delete technology']);
        }
    }

    public function addKeyFeatureEdit(Request $request, $services_id)
    {
        // Validasi data inputan
        $this->validate($request, [
            'keyFeature_name' => 'required|string|max:255',
        ]);

        // Temukan service berdasarkan $id
        $service = Service::find($services_id);

        // buat key feature baru
        $serviceKey = new ServiceKey();
        $serviceKey->name = $request->input('keyFeature_name');

        // simpan key feature ke dalam service
        $service->serviceKeys()->save($serviceKey);
        
        return redirect()->route('service-edit', $service->id)->with('success', 'Key Feature has been added successfully.');
    }

    public function deleteKeyFeature($services_id, $keyfeature_id)
    {
        // Temukan service berdasarkan ID
        $service = Service::find($services_id);

        // Pastikan service ditemukan
        if (!$service) {
            return redirect()->route('service')->with('error', 'Service not found.');
        }

        // Temukan keyfeature berdasarkan ID
        $serviceKey = ServiceKey::find($keyfeature_id);

        if (!$serviceKey) {
            return redirect()->route('service')->with('error', 'Key feature not found.');
        }

        // Hapus keyfeature dari portofolio
        $serviceKey->delete();

        return redirect()->route('service')->with('success', 'Key feature deleted successfully.');
    }

    //API

    public function getServicesByName(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
        ]);

        // Dapatkan nama service
        $requestedName = $request->input('name');

        // Query database untuk mengambil service berdasarkan nama yang sesuai
        $services = Service::where('name', $requestedName)->with('technologies', 'serviceKeys')->get();

        // Periksa apakah service ditemukan
        if ($services->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'Service is not found',
            ], 404);
        }

        return ServiceResource::collection($services);
    }

    public function getServices(Request $request)
    {
        {
            $services = Service::all();
    
            if ($services->count() === 0) {
                return response()->json([
                    'success' => false,
                    'message' => 'Service is not found',
                ], 404);
            }
    
            return ServiceResource::collection($services);
        }
    }

    public function getTopServices()
    {
        $topServices = Service::where('isTopService', 'true')->get();

        return TopServiceResource::collection($topServices);
    }

    public function getServicePages()
    {
        // Ambil data dari tabel service_pages
        $servicePages = ServicePages::all();

        return ServicePageResource::collection($servicePages);
    }
}
