<?php

namespace App\Http\Controllers;

use App\Models\Technology;
use Illuminate\Http\Request;
use App\Models\TechnologyCategory;
use App\Http\Resources\TechnologyResource;

class TechnologyController extends Controller
{
    /**
     * Store a newly created technology in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function technology()
    {
        return view('cms.Technology.technology');
    }

    public function technologyshow(Request $request)
    {
        $technologies = Technology::all();
        $categories = TechnologyCategory::all();
        return view('cms.Technology.technology', compact('technologies', 'categories'));
    }

    public function store(Request $request)
    {
        // Validasi data yang diterima dari formulir
        $request->validate([
            'name' => 'required|string|max:255',
            'icon' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'technology_category_id' => 'required|exists:technology_categories,id',
        ]);

        // Menyimpan gambar teknologi
        if ($request->hasFile('icon')) {
            $iconFile = $request->file('icon');
            $iconFileName = $iconFile->getClientOriginalName();
            $iconFile->move('img/technologies', $iconFileName);
            $iconPath = '/img/technologies/' . $iconFileName;
        }

        // Menyimpan data teknologi ke database
        $technologies = new Technology([
            'name' => $request->name,
            'icon' => url($iconPath),
        ]);

        $technologies->technology_category_id = $request->technology_category_id;
        
        $technologies->save();

        // Redirect kembali ke halaman technology dengan pesan sukses
        return redirect()->route('technology')->with('success', 'Technology added successfully.');
    }

    public function storeCategory(Request $request)
    {
        // Validasi data yang diterima dari formulir
        $request->validate([
            'category_name' => 'required|string|max:255',
        ]);

        // Menyimpan data kategori ke database
        $category = new TechnologyCategory([
            'name' => $request->category_name,
        ]);

        $category->save();

        // Redirect kembali ke halaman sebelumnya dengan pesan sukses
        return back()->with('success', 'Category added successfully.');
    }

    public function edit($id)
    {
        $technology = Technology::findOrFail($id);
        $categories = TechnologyCategory::all();
        return view('cms.Technology.edit', compact('technology', 'categories'));
    }

    public function update(Request $request, $id)
    {
        $technology = Technology::findOrFail($id);

        // validasi data yang akan diupdate
        $validateData = $request->validate([
            'name' => 'required|string|max:255',
            'icon' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            'technology_category_id' => 'required|exists:technology_categories,id',
        ]);

        //update data technology
        $technology->technology_category_id = $request->technology_category_id;
        $technology->name = $request->input('name');

        //periksa apakah ada file gambar yang diupload
        if ($request->hasFile('icon')) {
            // Proses gambar baru jika ada
            $iconFile = $request->file('icon');
            $iconFileName = $iconFile->getClientOriginalName();
            $iconFile->move('img/technologies', $iconFileName);
            $iconPath = '/img/technologies/' . $iconFileName;

            $technology->icon = url($iconPath);
        }

        // simpan perubahan
        $technology->save();

        // redirect ke halaman technology dengan pesan sukses
        return redirect()->route('technology')->with('success', 'Technology updated successfully.');
    }

    // API

    public function getTechnologies(Request $request)
    {
        $technologies = Technology::all();

        if ($technologies->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'Technology is not found',
            ], 404);
        }

        return TechnologyResource::collection($technologies);
    }

    public function getTechnologiesByCategory(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
        ]);

        $categoryName = $request->input('name');

        $technologyCategory = TechnologyCategory::where('name', $categoryName)->first();

        if (!$technologyCategory) {
            return response()->json([
                'success' => false,
                'message' => 'Technology category not found',
            ], 404);
        }

        // Ambil teknologi berdasarkan kategori
        $technologies = $technologyCategory->technologies;

        return TechnologyResource::collection($technologies);
    }
}
