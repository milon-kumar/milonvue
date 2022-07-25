<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\TagController;
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

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group(['prefix'=>'v1/'],function (){
    Route::get('/user/check',function (){
        return "This is form api return";
    });

    Route::get('/users',[AuthController::class,'users']);
    Route::post('/user/register',[AuthController::class,'registration']);
    Route::post('/user/login',[AuthController::class,'login'])->name('login');
    Route::apiResource('companies', CompanyController::class);


//    Tag Crud

    Route::apiResource('/tags',TagController::class);
});


