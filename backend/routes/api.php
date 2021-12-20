<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarsController;

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



Route::get('/', [CarsController::class, 'index']);
Route::post('createcars', [CarsController::class, 'create']);
Route::put('updatecars/{id}', [CarsController::class, 'update']);
Route::delete('deletecars/{id}', [CarsController::class, 'delete']);
