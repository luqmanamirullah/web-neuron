<?php

namespace App\Http\Controllers;

use App\Models\Portofolio;
use Illuminate\Http\Request;
use App\Http\Resources\PortofolioResource;

class HomeController extends Controller
{

    //API
    public function getLatestPortfolios()
    {
        // Mengambil 6 portofolio terbaru berdasarkan tanggal pembuatan
        $latestPortfolios = Portofolio::orderBy('created_at', 'desc')->take(6)->get();

        return PortofolioResource::collection($latestPortfolios);
    }

}
