<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Technology;

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
        return view('cms.Technology.technology', compact('technologies'));
    }

    public function store(Request $request)
    {
        // Validasi data yang diterima dari formulir
        $request->validate([
            'name' => 'required|string|max:255',
            'icon' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
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
        
        $technologies->save();

        // Mengembalikan respons JSON dengan data teknologi yang baru dibuat
        return response()->json($technologies);
    }

    public function edit($id)
    {
        $technology = Technology::findOrFail($id);
        return view('cms.Technology.edit', compact('technology'));
    }

    public function update(Request $request, $id)
    {
        $technology = Technology::findOrFail($id);

        // validasi data yang akan diupdate
        $validateData = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        //update data technology
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
}
