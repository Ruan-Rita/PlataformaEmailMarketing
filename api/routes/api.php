<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

// FOR SACTUM
Route::get("/not-autheticated", function(){
    return ApiController::ApiError(401,"User not Authenticated");
});
// --------------------------------------------------------------------
// AUTHENTICATED AREA
// --------------------------------------------------------------------

Route::group(['middleware' => 'auth:sanctum'], function(){
    
    // --------------------------------------------------------------------
    // DATA CURRENT USER AUTHENTICATED
    // --------------------------------------------------------------------
    Route::group(["/auth" => "/user"],function(){
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::post('/refresh', [AuthController::class, 'refresh']);
        Route::post('/me', [AuthController::class, 'me']);
    });

    // --------------------------------------------------------------------
    // MANAGER USERS
    // --------------------------------------------------------------------
    Route::group(["prefix" => "/user"],function(){
        Route::get('/', [UserController::class, 'index'])->name('user/get');
        Route::get('/{id}', [UserController::class, 'show'])->name('user/get/id');
        Route::post('/', [UserController::class, 'store'])->name('user/post');
        Route::put('/{id}', [UserController::class, 'update'])->name('user/update/id');
        Route::delete('/{id}', [UserController::class, 'delete'])->name('user/delete/id');
    });

    // --------------------------------------------------------------------
    // MANAGER PRODUCTS
    // --------------------------------------------------------------------
    Route::group(["prefix" => "/product"],function(){
        Route::get('/', [UserController::class, 'index'])->name('user/get');
        Route::post('/store', [UserController::class, 'index'])->name('user/get');
        Route::put('/update', [UserController::class, 'index'])->name('user/get');
        Route::delete('/delete', [UserController::class, 'index'])->name('user/get');
    });
});