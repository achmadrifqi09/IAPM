<?php

use App\Http\Controllers\AssetRoutesController;
use App\Http\Controllers\ClientPageController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\WebAssetController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/', [ClientPageController::class, 'home']);
Route::get('/about-us', [ClientPageController::class, 'about']);
Route::get('/services', [ClientPageController::class, 'service']);
Route::get('/services/{id}', [ClientPageController::class, 'serviceDetail']);
Route::get('/blogs', [ClientPageController::class, 'blog']);
Route::get('/blogs/{id}', [ClientPageController::class, 'blogDetail']);

Route::get('/asset/{asset}', AssetRoutesController::class);


Route::get('/page-editor/home-page', [PageController::class, 'homeEditor']);


Route::get('/service-products', [ServiceController::class, 'index']);
Route::get('/service-products/form', [ServiceController::class, 'create']);
Route::post('/service-products', [ServiceController::class, 'store']);
Route::get('/service-products/{id}/form', [ServiceController::class, 'edit']);
Route::post('/service-products/{id}/form', [ServiceController::class, 'update']);
Route::delete('/service-products/{id}', [ServiceController::class, 'destroy']);


Route::get('/web-assets', [WebAssetController::class, 'index']);
Route::post('/web-assets', [WebAssetController::class, 'create']);
Route::post('/web-assets/{id}', [WebAssetController::class, 'update']);
Route::delete('/web-assets/{id}', [WebAssetController::class, 'destroy']);
