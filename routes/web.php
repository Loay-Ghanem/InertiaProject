<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::controller(WebController::class)
    ->group(function () {
        Route::get('/', 'home')->name('home');
        Route::get('about-us', 'about')->name('about');
        Route::get('contact', 'contact')->name('contact');
        Route::get('main-category/{id}', 'mainCategory')->name('main-category');
        Route::get('sub-category/{id}', 'subCategory')->name('sub-category');
        Route::get('item/{id}', 'item')->name('item');
    });

require __DIR__ . '/settings.php';
