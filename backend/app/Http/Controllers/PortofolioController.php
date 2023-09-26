<?php

namespace App\Http\Controllers;

use App\Http\Resources\PortofolioResource;
use App\Http\Resources\SuccessPortofolioResource;
use App\Models\Deliverable;
use App\Models\Handle;
use App\Models\Portofolio;
use App\Models\Technology;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class PortofolioController extends Controller
{
    // show blade portofolio
    public function portofolio()
    {
        return view('cms.Portofolio.portofolio');
    }

    // show portofolio
    public function showportofolio(Request $request)
    {
        $search = $request->input('search'); // Ambil nilai dari input pencarian

        // Jika ada parameter pencarian, lakukan pencarian berdasarkan nama atau deskripsi
        if ($search) {
            $portofolios = Portofolio::where('name', 'like', '%' . $search . '%')
                ->orWhere('desc', 'like', '%' . $search . '%')
                ->with('deliverables')
                ->get();
        } else {
            // Jika tidak ada parameter pencarian, ambil semua data portofolio
            $portofolios = Portofolio::with('deliverables')->get();
        }

        // Query untuk mendapatkan data teknologi terkait dengan portofolio
        $portfolioTech = DB::table('technologies')
            ->select('portofolios.name as portfolio_name', 'technologies.name as tech_name', 'technologies.icon')
            ->join('portofolio_technologies', 'technologies.id', '=', 'portofolio_technologies.technologies_id')
            ->join('portofolios', 'portofolio_technologies.portofolio_id', '=', 'portofolios.id')
            ->get();

        return view('cms.Portofolio.portofolio', compact('portofolios'));
    }

    // delete portofolio
    public function deletePortofolio($id)
    {
        $portofolios = Portofolio::findOrFail($id);

        Deliverable::where('portofolio_id', $id)->delete();

        Handle::where('portofolio_id', $id)->delete();

        // Hapus terlebih dahulu relasi dengan teknologi
        $portofolios->technologies()->detach();
        // Kemudian hapus portofolio 
        $portofolios->delete();

        return redirect()->route('portofolio')->with('success', 'Portofolio has been deleted successfully.');
    }

    // show add portofolio
    public function create()
    {
        $technologies = Technology::all();
        $portofolio = new Portofolio();
        $successProjectOption = [
            'true' => 'Yes',
            'false' => 'No',
        ];
        return view('cms.Portofolio.add', compact('technologies', 'portofolio', 'successProjectOption'));
    }

    public function store(Request $request)
    {
        // Validasi data yang diterima dari formulir
        $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'customer_name' => 'required|string|max:255',
            'desc' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'our_solution' => 'required|string',
            'details' => 'required|string',
            'created_at' => 'required|date',
            'successProject' => Rule::in(['true', 'false']),
            'technologies' => 'nullable|array',
            'deliverables' => 'required|array',
            'handles' => 'required|array',
        ]);

        if ($request->hasFile('image')) {
            $profilePicture = $request->file('image');
            $profilePictureName = $profilePicture->getClientOriginalName();
            $profilePicture->move('img/portofolios', $profilePictureName);
            $profilePicturePath = '/img/portofolios/' . $profilePictureName;
        }

        $successProject = $request->input('successProject');

        // Simpan data portofolio ke database
        $portofolio = new Portofolio([
            'name' => $request->name,
            'category' => $request->category,
            'customer_name' => $request->customer_name,
            'desc' => $request->desc,
            'our_solution' => $request->our_solution,
            'details' => $request->details,
            'created_at' => $request->created_at,
            'image' => url($profilePicturePath),
            'successProject' => $successProject,
        ]);

        $portofolio->save();

        // Menyimpan teknologi terkait dengan portofolio
        $selectedTechnologies = $request->input('technologies', []); // Ambil array teknologi yang dipilih
        $portofolio->technologies()->attach($selectedTechnologies); // Menyambungkan teknologi yang dipilih dengan portofolio

        // Proses deliverables
        $deliverables = $request->input('deliverables');
        if (!empty($deliverables)) {
            foreach ($deliverables as $deliverable) {
                Deliverable::create([
                    'name' => $deliverable,
                    'portofolio_id' => $portofolio->id,
                ]);
            }
        }

        // Proses handles
        $handles = $request->input('handles');
        if (!empty($handles)) {
            foreach ($handles as $handle) {
                Handle::create([
                    'name' => $handle,
                    'portofolio_id' => $portofolio->id,
                ]);
            }
        }

        // Redirect ke halaman yang sesuai atau tampilkan pesan sukses
        return redirect()->route('portofolio')->with('success', 'Portfolio added successfully.');
    }

    public function edit($id)
    {
        $portofolio = Portofolio::findOrFail($id);

        $technologies = Technology::all();

        $successProjectOption = [
            'true' => 'Yes',
            'false' => 'No',
        ];
        $selectedTechnologies = $portofolio->technologies->pluck('id')->toArray();
        return view('cms.Portofolio.edit', compact('portofolio', 'technologies', 'selectedTechnologies', 'successProjectOption'));
    }

    public function update(Request $request, $id)
    {
        $portofolio = Portofolio::findOrFail($id);

        // Validasi data yang akan diupdate
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'customer_name' => 'required|string|max:255',
            'desc' => 'required|string',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            'our_solution' => 'required|string',
            'details' => 'required|string',
            'created_at' => 'required|date',
            'successProject' => 'required|in:true,false',
            'technologies' => 'required|array',
        ]);

        // Update data portofolio
        $portofolio->name = $request->input('name');
        $portofolio->category = $request->input('category');
        $portofolio->customer_name = $request->input('customer_name');
        $portofolio->desc = $request->input('desc');
        $portofolio->our_solution = $request->input('our_solution');
        $portofolio->details = $request->input('details');
        $portofolio->created_at = $request->input('created_at');
        $portofolio->successProject = $request->input(('successProject'));

        // Simpan perubahan pada data portofolio
        $portofolio->save();

        // Update teknologi terkait dengan portofolio
        $selectedTechnologies = $request->input('technologies', []); // Ambil array teknologi yang dipilih
        $portofolio->technologies()->sync($selectedTechnologies); // Synchronize teknologi yang dipilih
        // Periksa apakah ada file gambar yang diupload
        if ($request->hasFile('image')) {
            $profilePicture = $request->file('image');
            $profilePictureName = $profilePicture->getClientOriginalName();
            $profilePicture->move('img/portofolios', $profilePictureName);
            $profilePicturePath = '/img/portofolios/' . $profilePictureName;

            // Update path gambar portofolio
            $portofolio->image = url($profilePicturePath);
            $portofolio->save();
        }

        // Redirect ke halaman portofolio dengan pesan sukses
        return redirect()->route('portofolio')->with('success', 'Portofolio updated successfully.');
    }

    public function addTechnology(Request $request, $id)
    {
        $portofolio = Portofolio::findOrFail($id);
        $technologyId = $request->input('technology_id');

        // Cek apakah teknologi tersebut sudah ada dalam portofolio
        if (!$portofolio->technologies->contains($technologyId)) {
            // Jika belum ada, tambahkan teknologi ke portofolio
            $portofolio->technologies()->attach($technologyId);
        }

        return redirect()->route('portofolio-edit', ['id' => $portofolio->id])->with('success', 'Technology added to portofolio successfully');
    }

    public function deleteTechnology($portofolio_id, $technology_id)
    {
        try {
            // Ensure both IDs are valid
            $portofolio = Portofolio::findOrFail($portofolio_id);
            $technology = Technology::findOrFail($technology_id);

            // Remove the technology from the portfolio's technologies
            $portofolio->technologies()->detach($technology);

            return redirect()->route('portofolio')->with('success', 'Technology deleted successfully');
        } catch (\Exception $e) {
            // Handle any errors that occur during the process
            return redirect()->route('portofolio')->withErrors(['error' => 'Failed to delete technology']);
        }
    }

    public function deleteDeliverable($portofolio_id, $deliverable_id)
    {
        // Temukan portofolio berdasarkan ID
        $portofolio = Portofolio::find($portofolio_id);

        // Pastikan portofolio ditemukan
        if (!$portofolio) {
            return redirect()->route('portofolio')->with('error', 'Portofolio not found.');
        }

        // Temukan deliverable berdasarkan ID
        $deliverable = Deliverable::find($deliverable_id);

        // Pastikan deliverable ditemukan
        if (!$deliverable) {
            return redirect()->route('portofolio')->with('error', 'Deliverable not found.');
        }

        // Hapus deliverable dari portofolio
        $deliverable->delete();

        return redirect()->route('portofolio')->with('success', 'Deliverable deleted successfully.');
    }

    public function addDeliverableEdit(Request $request, $portofolio_id)
    {
        // Validasi data inputan
        $this->validate($request, [
            'deliverable_name' => 'required|string|max:255',
        ]);

        // Temukan portofolio berdasarkan ID
        $portofolio = Portofolio::find($portofolio_id);

        // Buat deliverable baru
        $deliverable = new Deliverable();
        $deliverable->name = $request->input('deliverable_name');

        // Simpan deliverable ke dalam portofolio
        $portofolio->deliverables()->save($deliverable);

        return redirect()->route('portofolio-edit', $portofolio->id)->with('success', 'Deliverable has been added successfully.');
    }

    public function deleteHandle($portofolio_id, $handle_id)
    {
        // Temukan portofolio berdasarkan ID
        $portofolio = Portofolio::find($portofolio_id);

        // Pastikan portofolio ditemukan
        if (!$portofolio) {
            return redirect()->route('portofolio')->with('error', 'Portofolio not found.');
        }

        // Temukan deliverable berdasarkan ID
        $handle = Handle::find($handle_id);

        // Pastikan deliverable ditemukan
        if (!$handle) {
            return redirect()->route('portofolio')->with('error', 'Handle not found.');
        }

        // Hapus deliverable dari portofolio
        $handle->delete();

        return redirect()->route('portofolio')->with('success', 'Handle deleted successfully.');
    }

    public function addHandleEdit(Request $request, $portofolio_id)
    {
        // Validasi data inputan
        $this->validate($request, [
            'handle_name' => 'required|string|max:255',
        ]);

        // Temukan portofolio berdasarkan ID
        $portofolio = Portofolio::find($portofolio_id);

        //buat handle baru
        $handle = new Handle();
        $handle->name = $request->input('handle_name');

        //simpan handle ke dalam portofolio
        $portofolio->handles()->save($handle);

        return redirect()->route('portofolio-edit', $portofolio->id)->with('success', 'Handle has been added successfully.');
    }

    // API

    public function getStartEndYear()
    {
        $startYear = Portofolio::orderBy('created_at', 'asc')->first()->created_at->format('Y');
        $endYear = Portofolio::orderBy('created_at', 'desc')->first()->created_at->format('Y');

        return response()->json([
            'start_year' => $startYear,
            'end_year' => $endYear,
        ]);
    }

    public function getCategory()
    {
        $category = Portofolio::select('category')->distinct()->get();


        $category = Portofolio::select('category')->distinct()->get()->map(function ($item) {
            return $item->category;
        });

        return response()->json($category);

    }

    public function getPortofolio(Request $request)
    {
        $request->validate([
            'category' => 'required|string',
            'start_year' => 'nullable|numeric',
            'end_year' => 'nullable|numeric',
            'page' => 'nullable|numeric',
            'sort_by' => 'nullable|in:name,date',
            'filter_by' => 'nullable|in:asc,desc',
        ]);


        $category = $request->input('category');
        $startYear = $request->input('start_year');
        $endYear = $request->input('end_year');
        $page = $request->input('page', 1);
        $sortBy = $request->input('sort_by', 'date');
        $filterBy = $request->input('filter_by', 'asc');

        // Buat kueri berdasarkan sort_by dan filter_by
        $portofolioQuery = Portofolio::where('category', $category)
            ->with('technologies', 'deliverables');

        if (!is_null($startYear)) {
            $portofolioQuery->whereYear('created_at', '>=', $startYear);
        }

        if (!is_null($endYear)) {
            $portofolioQuery->whereYear('created_at', '<=', $endYear);
        }

        if ($sortBy === 'date') {
            $portofolioQuery->orderBy('created_at', $filterBy);
        } else {
            $portofolioQuery->orderBy('name', $filterBy);
        }

        $portofolios = $portofolioQuery->paginate(6);

        $portofolios->appends([
            'category' => $category,
            'page' => $page,
        ]);

        $portofolios->getCollection()->transform(function ($portofolio) {
            return new PortofolioResource($portofolio);
        });

        if ($portofolios->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'Portofolio is not found',
            ], 404);
        }

        return PortofolioResource::collection($portofolios);
    }

    public function getLatestPortfolios()
    {
        // Mengambil 6 portofolio terbaru berdasarkan tanggal pembuatan
        $latestPortfolios = Portofolio::orderBy('created_at', 'desc')->take(6)->get();

        return PortofolioResource::collection($latestPortfolios);
    }

    public function getSuccessPortofolio()
    {
        $successPortofolio = Portofolio::where('successProject', 'true')
            ->limit(3) // Batasi hanya mengambil 3 data teratas
            ->orderBy('id', 'desc') // Urutkan berdasarkan ID secara descending (untuk mengambil yang paling atas)
            ->get();

        return SuccessPortofolioResource::collection($successPortofolio);
    }

    public function getPortfolioById($id)
    {
        $portfolio = Portofolio::findOrFail($id);

        return new PortofolioResource($portfolio);
    }
}