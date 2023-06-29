<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('products', ProductController::class);
});
Route::post('/products', [ProductController::class, 'store'])->middleware('auth:sanctum');
Route::middleware('auth:api')->group(function () {
    Route::post('/products', [ProductController::class, 'store']);
});
