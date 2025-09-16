<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Vehicule;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        // Récupère toutes les voitures avec leur marque, les plus récentes d'abord
        $vehicules = Vehicule::with('brand')->latest()->get();

        return Inertia::render('home', [
            // on passe la liste complète sous le nom 'vehicules'
            'vehicules' => $vehicules,

            // si tu veux toujours en avoir seulement 5 pour un carrousel ou autre
            'cars' => $vehicules->take(5),

            // infos d'auth pour le layout
            'auth' => [
                'user' => auth()->user() ? [
                    'id'   => auth()->id(),
                    'name' => auth()->user()->nom,
                    'role' => auth()->user()->role->name,
                ] : null,
            ],
        ]);
    }
}
