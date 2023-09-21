<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\PortofolioController;
use App\Http\Controllers\TechnologyController;
use App\Http\Controllers\MethadologyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Service
Route::get('/services', [ServiceController::class, 'getServices']);
Route::get('/services/by-name', [ServiceController::class, 'getServicesByName']);

// Portofolio
Route::get('/portofolio', [PortofolioController::class, 'getPortofolio']);

// latest portofolio
Route::get('/portfolios/latest', [HomeController::class, 'getLatestPortfolios']);

// Methodology
Route::get('/methodology', [MethadologyController::class, 'getMethadology']);
Route::get('/methodology/by-category', [MethadologyController::class, 'getMethadologyByCategory']);

// Technology
Route::get('/technologies/by-category', [TechnologyController::class, 'getTechnologiesByCategory']);
Route::get('/technologies', [TechnologyController::class, 'getTechnologies']);

// Product
Route::get('/products', [ProductController::class, 'getProduct']);

// Home
Route::get('home', [HomeController::class, 'getHome']);