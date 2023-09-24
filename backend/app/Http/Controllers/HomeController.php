<?php

namespace App\Http\Controllers;

use App\Models\Home;
use Illuminate\Http\Request;
use App\Http\Resources\HomeResource;

class HomeController extends Controller
{
    public function getHome(Request $request)
    {
        $homes = Home::with(['neuronProgram', 'heroTitleLists', 'testimonials', 'certificates', 'partners'])->get();

        return HomeResource::collection($homes);
    }
}