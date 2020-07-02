<?php

use Illuminate\Support\Facades\Route;

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
Route::prefix('api')->group(function () {
    Route::prefix('product')->group(function () {
        Route::post('get', 'ProductController@show');
    });
});

Route::get('/{any}', 'PageController@index')->where('any', '.*');
