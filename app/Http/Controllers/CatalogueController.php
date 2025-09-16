<?php

namespace App\Http\Controllers;
use App\Models\Vehicule;
use Inertia\Inertia;
use Illuminate\Http\Request;

class CatalogueController extends Controller
{
    public function index()
    {
        $vehicules = Vehicule::with('brand')->latest()->get(); // Récupère toutes les voitures avec leur marque

        return Inertia::render('catalogue/index', [
            'vehicules' => $vehicules
        ]);
    }
}
