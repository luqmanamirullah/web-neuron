<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MethadologyCategory;

class MethadologyController extends Controller
{
    public function methadology()
    {
        return view('cms.Methadology.methadology');
    }

    public function methadologyshow(Request $request)
    {
        $search = $request->input('search'); // Ambil nilai dari input pencarian

        // Jika ada parameter pencarian, lakukan pencarian berdasarkan nama atau deskripsi
        if ($search) {
            $methodologyCategories = MethadologyCategory::where('category_name', 'like', '%' . $search . '%')
                ->get();
        } else {
            // Jika tidak ada parameter pencarian, ambil semua data Methadology
            $methodologyCategories = MethadologyCategory::all();
        }

        return view('cms.Methadology.methadology', compact('methodologyCategories'));
    }

    public function deleteMethadology($id)
    {
        $methodologyCategories = MethadologyCategory::findOrFail($id);
        $methodologyCategories->delete();

        return redirect()->route('methadology')->with('success', 'Blog has been deleted successfully.');
    }

    public function create()
    {
        return view('cms.Methadology.add');
    }

    public function store(Request $request)
    {
        // Validasi data yang diterima dari formulir
        $request->validate([
            'category_title' => 'required|string|max:255',
            'category_name' => 'required|string|max:255',
            'flow_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', 
        ]);

        if ($request->hasFile('flow_image')) {
            $methadology = $request->file('flow_image');
            $methadologyName = $methadology->getClientOriginalName();
            $methadology->move('img/methodology', $methadologyName);
            $methadologyPath = '/img/methodology/' . $methadologyName;
        }

        // Simpan data portofolio ke database
        $methadologies = new MethadologyCategory([
            'category_title' => $request->category_title,
            'category_name' => $request->category_name,
            'flow_image' => url($methadologyPath)
        ]);
        
        $methadologies->save();

        // Redirect ke halaman yang sesuai atau tampilkan pesan sukses
        return redirect()->route('methadology')->with('success', 'Methadology added successfully.');
    }

    public function edit($id)
    {
        $methodology = MethadologyCategory::findOrFail($id);
        return view('cms.Methadology.edit', compact('methodology'));
    }

    public function update(Request $request, $id)
    {
        $methodology = MethadologyCategory::findOrFail($id);

        // Validasi data yang akan diupdate
        $validatedData = $request->validate([
            'category_title' => 'required|string|max:255',
            'category_name' => 'required|string|max:255',
            'flow_image' => 'image|mimes:jpeg,png,jpg,gif,webp|max:2048',
        ]);

        // update data methadology
        $methodology->category_title = $request->input('category_title');
        $methodology->category_name = $request->input('category_name');

        // Periksa apakah ada file gambar yang diupload
        if ($request->hasFile('flow_image')) {
            $methadology = $request->file('flow_image');
            $methadologyName = $methadology->getClientOriginalName();
            $methadology->move('img/methodology', $methadologyName);
            $methadologyPath = '/img/methodology/' . $methadologyName;

            // Update path gambar portofolio
            $methodology->flow_image = url($methadologyPath);
        }

        // Simpan perubahan
        $methodology->save();

        // Redirect ke halaman methadology dengan pesan sukses
        return redirect()->route('methadology')->with('success', 'Methadology updated successfully.');
    }
}