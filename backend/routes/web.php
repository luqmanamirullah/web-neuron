<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\PortofolioController;
use App\Http\Controllers\MethadologyController;
use App\Http\Controllers\BlogCategoryController;
use App\Http\Controllers\Register\RegisterController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    return view('login.login');
})->name('login');

Route::get('/login', [AuthController::class, 'loginpage']);
Route::post('/postlogin', [AuthController::class, 'postlogin'])->name('postlogin');

Route::get('/forgot-password', function () {
    return view('auth.forgot-password');
})->middleware('guest')->name('password.request');

Route::post('/forgot-password', [AuthController::class, 'forgotPassword'])->middleware('guest')->name('password.email');

Route::get('/reset-password/{token}', function ($token) {
    return view('auth.reset-password', ['token' => $token]);
})->middleware('guest')->name('password.reset');

Route::post('/reset-password', [AuthController::class, 'resetPassword'])->middleware('guest')->name('password.update');

Route::middleware(['auth'])->group(function () {
    Route::get('/adminpanel', [AuthController::class, 'adminpanel'])->name('adminpanel');
    Route::get('/refresh-token', [AuthController::class, 'refreshToken'])->name('refresh-token');
    Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
    // change password
    Route::post('/change-password', [AuthController::class, 'changePassword'])->name('post-change-password');
    Route::get('/change-password', [AuthController::class, 'showChangePasswordForm'])->name('change-password');
    // show portofolio
    Route::get('/portofolio', [PortofolioController::class, 'portofolio'])->name('portofolio');
    Route::get('/portofolio', [PortofolioController::class, 'showportofolio'])->name('portofolio');
    Route::get('/show-portofolio', [PortofolioController::class, 'showPortofolio'])->name('show-portofolio');
    // Delete portofolio
    Route::delete('/portofolio/{id}', [PortofolioController::class, 'deletePortofolio'])->name('delete-portofolio');
    // Add Portofolio
    Route::get('/portofolio/create', [PortofolioController::class, 'create'])->name('portofolio-create');
    Route::post('/portofolio/store', [PortofolioController::class, 'store'])->name('portofolio-store');
    // edit & update portofolio
    Route::get('portofolio/{id}/edit', [PortofolioController::class, 'edit'])->name('portofolio-edit');
    Route::put('portofolio/{id}/update', [PortofolioController::class, 'update'])->name('portofolio-update');
    // show produk
    Route::get('/product', [ProductController::class, 'product'])->name('product');
    Route::get('/product', [ProductController::class, 'showproduct'])->name('product');
    Route::get('/show-product', [ProductController::class, 'showProduct'])->name('show-product');
    // delete produk
    Route::delete('/product/{id}', [ProductController::class, 'deleteProduct'])->name('delete-product');
    // Add Product
    Route::get('/product/create', [ProductController::class, 'create'])->name('product-create');
    Route::post('/product/store', [ProductController::class, 'store'])->name('product-store');
    // edit & update product
    Route::get('product/{id}/edit', [ProductController::class, 'edit'])->name('product-edit');
    Route::put('product/{id}/update', [ProductController::class, 'update'])->name('product-update');
    // show blog
    Route::get('/blog', [BlogController::class, 'blog'])->name('blog');
    Route::get('/blog', [BlogController::class, 'showblog'])->name('blog');
    Route::get('/show-blog', [BlogController::class, 'showBlog'])->name('show-blog');
    // delete blog
    Route::delete('/blog/{id}', [BlogController::class, 'deleteBlog'])->name('delete-blog');
    // Add blog
    Route::get('/blog/create', [BlogController::class, 'create'])->name('create-blog');
    Route::post('/blog/store', [BlogController::class, 'store'])->name('store-blog');
    // View blog
    Route::get('/blog/{id}', [BlogController::class, 'viewBlog'])->name('view-blog');
    // edit & update blog
    Route::get('blog/{id}/edit', [BlogController::class, 'edit'])->name('blog-edit');
    Route::put('blog/{id}/update', [BlogController::class, 'update'])->name('blog-update');
    // show blog category
    Route::get('/blog-categories', [BlogCategoryController::class, 'blogcategories'])->name('blog-categories');
    Route::get('/blog-categories', [BlogCategoryController::class, 'blogcategoriesshow'])->name('blog-categories');
    Route::get('/show-blog-categories', [BlogCategoryController::class, 'blogCategoriesShow'])->name('show-blog-categories');
    // Add blog category
    Route::get('/blog-categories/create', [BlogCategoryController::class, 'create'])->name('create-blog-categories');
    Route::post('/blog-categories/store', [BlogCategoryController::class, 'store'])->name('store-blog-categories');
    // delete blog category
    Route::delete('/blog-categories/{id}', [BlogCategoryController::class, 'deleteBlogCategories'])->name('delete-blog-categories');
    // edit & update blog category
    Route::get('blog-categories/{id}/edit', [BlogCategoryController::class, 'edit'])->name('blog-categories-edit');
    Route::put('blog-categories/{id}/update', [BlogCategoryController::class, 'update'])->name('blog-categories-update');
    // show methadology
    Route::get('/methadology', [MethadologyController::class, 'methadology'])->name('methadology');
    Route::get('/methadology', [MethadologyController::class, 'methadologyshow'])->name('methadology');
    Route::get('/show-blog', [MethadologyController::class, 'showMethadology'])->name('show-methadology');
    // delete methadology
    Route::delete('/methadology/{id}', [MethadologyController::class, 'deleteMethadology'])->name('delete-methadology');
    // Add methadology
    Route::get('/methadology/create', [MethadologyController::class, 'create'])->name('create-methadology');
    Route::post('/methadology/store', [MethadologyController::class, 'store'])->name('store-methadology');
    // edit & update methadology
    Route::get('methadology/{id}/edit', [MethadologyController::class, 'edit'])->name('methadology-edit');
    Route::put('methadology/{id}/update', [MethadologyController::class, 'update'])->name('methadology-update');
});

// hanya untuk user dengan role superadmin
Route::middleware(['auth', 'superadmin'])->group(function () {
    // User show
    Route::get('/user', [UserController::class, 'user'])->name('user');
    Route::get('/user', [UserController::class, 'showuser'])->name('user');
    Route::get('/show-user', [UserController::class, 'showUser'])->name('show-user');
    Route::delete('/user/{id}', [UserController::class, 'deleteUser'])->name('delete-user');
    // edit & update data user
    Route::get('/user/edit/{id}', [UserController::class, 'edit'])->name('user.edit');
    Route::put('/user/update/{id}', [UserController::class, 'update'])->name('user.update');
    // Register
    Route::get('/register', [RegisterController::class, 'registerpage'])->name('register');
    Route::post('/postregister', [RegisterController::class, 'postregister'])->name('postregister');
});