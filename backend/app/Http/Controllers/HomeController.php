<?php

namespace App\Http\Controllers;

use App\Models\Home;
use Illuminate\Http\Request;
use App\Http\Resources\HomeResource;

class HomeController extends Controller
{
    public function getHome()
    {
        $homes = Home::with(['neuronProgram', 'ctaContact', 'heroTitleLists', 'testimonials', 'certificates', 'partners'])->get();

        return HomeResource::collection($homes);
    }
}