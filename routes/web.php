<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\VehiculeController;
use App\Http\Controllers\CatalogueController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/', fn() => Inertia::render('home'))->name('home');
Route::get('/catalogue', fn() => Inertia::render('catalogue/index'))->name('catalogue.index');
Route::get('/vehicules/create', fn() => Inertia::render('vehicules/create'))->name('vehicules.create');
Route::get('/admin/dashboard', fn() => Inertia::render('admin/dashboard'))->name('admin.dashboard');

require __DIR__.'/auth.php';
