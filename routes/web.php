<?php

use App\Http\Controllers\ClientPageController;
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
