<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Vehicule;
use Illuminate\Http\Request;

class HomeController extends Controller
{
        public function index()
    {
        $cars = Vehicule::with('brand', 'fuel')->latest()->take(12)->get();

        return Inertia::render('home', [
            'cars' => $cars
        ]);
    }
}
