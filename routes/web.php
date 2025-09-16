<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\BrandController;
use App\Http\Controllers\VehiculeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Models\Brand;
use App\Models\Vehicule;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Mail\DemoMail;
use Inertia\Inertia;

// Home
Route::get('/', [HomeController::class, 'index'])->name('home');

// Catalogue
Route::get('/catalogue', function () {
    $vehicules = Vehicule::with('brand')->get();

    return Inertia::render('catalogue/index', [
        'vehicules' => $vehicules,
        'auth' => [
            'user' => Auth::user() ? [
                'id' => Auth::user()->id,
                'nom' => Auth::user()->nom,
                'prenom' => Auth::user()->prenom,
                'role' => Auth::user()->role->name ?? Auth::user()->role_id,
            ] : null
        ],
    ]);
})->name('catalogue.index');

// Véhicules (auth)
Route::middleware('auth')->group(function () {

    // Create vehicule
    Route::get('/vehicules/create', function () {
        $brands = Brand::all();

        return Inertia::render('vehicules/create', [
            'brands' => $brands,
            'auth' => [
                'user' => Auth::user() ? [
                    'id' => Auth::user()->id,
                    'nom' => Auth::user()->nom,
                    'prenom' => Auth::user()->prenom,
                    'role' => Auth::user()->role->name ?? Auth::user()->role_id,
                ] : null
            ],
        ]);
    })->name('vehicules.create');

    Route::post('/vehicules', [VehiculeController::class, 'store'])->name('vehicules.store');
    Route::delete('/vehicules/{vehicule}', [VehiculeController::class, 'destroy'])->name('vehicules.destroy');
});

// Show vehicule
Route::get('/cars/{vehicule}', function (Vehicule $vehicule) {
    return Inertia::render('vehicules/show', [
        'vehicule' => $vehicule,
        'auth' => [
            'user' => Auth::user() ? [
                'id' => Auth::user()->id,
                'nom' => Auth::user()->nom,
                'prenom' => Auth::user()->prenom,
                'role' => Auth::user()->role->name ?? null,
                'role_id' => Auth::user()->role_id,
            ] : null,
        ],
    ]);
})->name('vehicules.show');

// Profile routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Admin routes (auth + permission)
Route::middleware(['auth', 'can:manage-users'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {

        // Dashboard / Users
        Route::get('/dashboard', [UserController::class, 'index'])->name('dashboard');
        Route::put('/users/{user}/role', [UserController::class, 'updateRole'])->name('users.updateRole');
        Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');

        // Brands CRUD
        Route::get('/brands', [BrandController::class, 'index'])->name('brands.index');
        Route::post('/brands', [BrandController::class, 'store'])->name('brands.store');
        Route::put('/brands/{brand}', [BrandController::class, 'update'])->name('brands.update');
        Route::delete('/brands/{brand}', [BrandController::class, 'destroy'])->name('brands.destroy');
    });
    
        Route::post('/vehicules/{vehicule}/contact', function (Request $request, Vehicule $vehicule) {
            $user = auth()->user();
            if (!$user) {
                abort(403);
            }

            // Envoie le mail à toi-même
            Mail::to('dilaraozturk028@gmail.com')->send(new DemoMail($vehicule, $user));

            return response()->json(['message' => 'Email envoyé !']);
        })->middleware('auth')->name('vehicules.contact');

require __DIR__.'/auth.php';

