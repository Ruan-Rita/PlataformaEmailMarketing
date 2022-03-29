<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmailLogController;
use App\Http\Controllers\UserController;
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
    // Route::group(["/auth" => "/user"],function(){
    //     Route::post('/logout', [AuthController::class, 'logout']);
    //     Route::post('/refresh', [AuthController::class, 'refresh']);
    //     Route::post('/me', [AuthController::class, 'me']);
    // });

    // --------------------------------------------------------------------
    // MANAGER USERS
    // --------------------------------------------------------------------
    Route::group(["prefix" => "/user"],function(){
        Route::get('/', [UserController::class, 'index']);
        Route::get('/{id}', [UserController::class, 'show']);
        Route::post('/', [UserController::class, 'store']);
        Route::put('/{id}', [UserController::class, 'update']);
        Route::delete('/{id}', [UserController::class, 'delete']);
    });

    // --------------------------------------------------------------------
    // MANAGER EMAILOG
    // --------------------------------------------------------------------
    Route::group(["prefix" => "/emaillog"],function(){
        Route::get('/', [EmailLogController::class, 'index']);
        Route::post('/', [EmailLogController::class, 'store']);
        Route::get('/{id}', [EmailLogController::class, 'show']);
    });
});