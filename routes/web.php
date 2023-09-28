<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\AssetRoutesController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ClientPageController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\MediaPreviewController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SitemapController;
use App\Http\Controllers\SocialController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\WebAssetController;
use App\Http\Controllers\WebAttributeController;
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

Route::middleware(['throttle:login'])->group(function () {
  Route::post('/login', [AuthController::class, 'auth']);
});

Route::get('/login', [AuthController::class, 'index'])->name('login');
Route::post('/logout', [AuthController::class, 'logout']);


Route::get('/', [ClientPageController::class, 'home']);

Route::get('/contacts', [ClientPageController::class, 'contact']);
Route::post('/contacts/send-email', [ContactController::class, 'sendMail']);

Route::get('/about-us', [ClientPageController::class, 'about']);

Route::get('/services', [ClientPageController::class, 'service']);
Route::get('/services/{id}', [ClientPageController::class, 'serviceDetail']);

Route::get('/blogs', [ClientPageController::class, 'blog']);
Route::get('/blogs/{slug}', [ClientPageController::class, 'blogDetail']);

Route::get('/asset/{asset}', AssetRoutesController::class);

Route::group(['middleware' => ['auth']], function () {
  Route::get('/generate-sitemap', [SitemapController::class, 'index']);
  Route::get('/account', [AccountController::class, 'index']);
  Route::post('/account/{id}', [AccountController::class, 'update']);
  Route::post('/otp', [AuthController::class, 'sendOtp'])->middleware('throttle:resend_otp');

  Route::get('/dashboard', [DashboardController::class, 'index']);
  Route::post('/contacts', [ContactController::class, 'store']);
  Route::put('/contacts/{id}/primary', [ContactController::class, 'setPrimaryContact']);
  Route::put('/contacts/{id}', [ContactController::class, 'update']);
  Route::delete('/contacts/{id}', [ContactController::class, 'destroy']);

  Route::post('/addresses', [AddressController::class, 'store']);
  Route::put('/addresses/{id}', [AddressController::class, 'update']);
  Route::delete('/addresses/{id}', [AddressController::class, 'destroy']);

  Route::post('/socials', [SocialController::class, 'store']);
  Route::put('/socials/{id}', [SocialController::class, 'update']);
  Route::delete('/socials/{id}', [SocialController::class, 'destroy']);

  Route::get('/pages/home-page', [PageController::class, 'homeEditor']);
  Route::get('/pages/about-page', [PageController::class, 'aboutEditor']);
  Route::get('/pages/service-page', [PageController::class, 'serviceEditor']);
  Route::get('/pages/contact-page', [PageController::class, 'contactEditor']);
  Route::put('/pages', [PageController::class, 'update']);

  Route::get('/web-attributes', [WebAttributeController::class, 'index']);

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


  Route::get('/testimonials', [TestimonialController::class, 'index']);
  Route::post('/testimonials', [TestimonialController::class, 'create']);
  Route::put('/testimonials/{id}', [TestimonialController::class, 'update']);
  Route::delete('/testimonials/{id}', [TestimonialController::class, 'destroy']);

  Route::get('/media-preview', [MediaPreviewController::class, 'index']);


  // Route::group(['middleware' => ['prevent-back-button']], function () {
  Route::get('/manage-blogs', [BlogController::class, 'index']);
  Route::get('/manage-blogs/form', [BlogController::class, 'create']);
  Route::post('/manage-blogs', [BlogController::class, 'store']);
  Route::get('/manage-blogs/{id}/form', [BlogController::class, 'edit']);
  Route::post('/manage-blogs/{id}/form', [BlogController::class, 'update']);
  Route::delete('/manage-blogs/{id}', [BlogController::class, 'destroy']);
  Route::get('/company', [CompanyController::class, 'index']);
  Route::put('/company', [CompanyController::class, 'update']);
  Route::post('/history-development/{id}', [CompanyController::class, 'historyUpdate']);
  Route::post('/history-development', [CompanyController::class, 'historyAdd']);
  Route::delete('/history-development/{id}', [CompanyController::class, 'historyDestroy']);
  // });
  Route::post('/categories', [CategoryController::class, 'store']);
  Route::put('/categories/{id}', [CategoryController::class, 'update']);
  Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);

  Route::get('/clients', [ClientController::class, 'index']);
  Route::post('/clients', [ClientController::class, 'store']);
  Route::post('/clients/{id}', [ClientController::class, 'update']);
  Route::delete('/clients/{id}', [ClientController::class, 'destroy']);
});
