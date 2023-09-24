<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\CtaContactController;
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

// Service Page
Route::get('/service-pages', [ServiceController::class, 'getServicePages']);

// Top Service
Route::get('/top-services', [ServiceController::class, 'getTopServices']);

// Portofolio
Route::get('/portofolio', [PortofolioController::class, 'getPortofolio']);

// Success Portofolio
Route::get('/success-portofolio', [PortofolioController::class, 'getSuccessPortofolio']);

// latest portofolio
Route::get('/portofolios/latest', [PortofolioController::class, 'getLatestPortfolios']);

// Detail portofolio
Route::get('/portofolio/{id}', [PortofolioController::class, 'getPortfolioById']);

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

// CTA_Contact
Route::get('/cta-contacts', [CtaContactController::class, 'getCtaContacts']);

// About
Route::get('/about', [AboutController::class, 'getAbout']);