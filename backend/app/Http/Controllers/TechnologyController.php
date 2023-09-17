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
}
