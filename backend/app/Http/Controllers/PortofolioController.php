<?php

namespace App\Http\Controllers;

use App\Models\Portofolio;
use Illuminate\Http\Request;

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
                ->get();
        } else {
            // Jika tidak ada parameter pencarian, ambil semua data portofolio
            $portofolios = Portofolio::all();
        }

        return view('cms.Portofolio.portofolio', compact('portofolios'));
    }

    // delete portofolio
    public function deletePortofolio($id)
    {
        $portofolios = Portofolio::findOrFail($id);
        $portofolios->delete();

        return redirect()->route('portofolio')->with('success', 'Portofolio has been deleted successfully.');
    }

    // show add portofolio
    public function create()
    {
        return view('cms.Portofolio.add');
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
        ]);

        if ($request->hasFile('image')) {
            $profilePicture = $request->file('image');
            $profilePictureName = $profilePicture->getClientOriginalName();
            $profilePicture->move('img/portofolios', $profilePictureName);
            $profilePicturePath = '/img/portofolios/' . $profilePictureName;
        }

        // Simpan data portofolio ke database
        $portofolio = new Portofolio([
            'name' => $request->name,
            'category' => $request->category,
            'customer_name' => $request->customer_name,
            'desc' => $request->desc,
            'image' => url($profilePicturePath)
        ]);
        
        $portofolio->save();

        // Redirect ke halaman yang sesuai atau tampilkan pesan sukses
        return redirect()->route('portofolio')->with('success', 'Portfolio added successfully.');
    }

    public function edit($id)
    {
        $portofolio = Portofolio::findOrFail($id);
        return view('cms.Portofolio.edit', compact('portofolio'));
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
        ]);

        // Update data portofolio
        $portofolio->name = $request->input('name');
        $portofolio->category = $request->input('category');
        $portofolio->customer_name = $request->input('customer_name');
        $portofolio->desc = $request->input('desc');

        // Periksa apakah ada file gambar yang diupload
        if ($request->hasFile('image')) {
            $profilePicture = $request->file('image');
            $profilePictureName = $profilePicture->getClientOriginalName();
            $profilePicture->move('img/portofolios', $profilePictureName);
            $profilePicturePath = '/img/portofolios/' . $profilePictureName;

            // Update path gambar portofolio
            $portofolio->image = url($profilePicturePath);
        }

        // Simpan perubahan
        $portofolio->save();

        // Redirect ke halaman portofolio dengan pesan sukses
        return redirect()->route('portofolio')->with('success', 'Portofolio updated successfully.');
    }
}
