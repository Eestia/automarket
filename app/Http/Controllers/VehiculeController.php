<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVehiculeRequest;
use App\Models\Vehicule;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class VehiculeController extends Controller
{
    public function create()
    {
        $brands = \App\Models\Brand::all();
        return Inertia::render('vehicules/create', [
        'brands' => $brands
    ]);
    }
    public function show(Vehicule $vehicule)
    {
        return Inertia::render('vehicules/show', [
            'vehicule' => $vehicule->load('brand') // charge la marque liée
        ]);
    }
    public function store(Request $request)
    {
        // Validation des données
        $validated = $request->validate([
            'model'        => ['required', 'string', 'max:255'],
            'etat'         => ['required', 'in:neuf,occasion'],
            'brand_id'     => ['required', 'exists:brands,id'],
            'annee'        => ['required', 'integer', 'between:1975,' . date('Y')],
            'kilometrage'  => ['required', 'integer', 'min:0'],
            'fuel_id'      => ['required', 'exists:fuels,id'],   // ou 'string|in:Essence,Diesel,Electrique' selon ton implémentation
            'cylindree'    => ['required', 'in:1l,1.2l,1.5l,1.8l,2l,3l,NONE'],
            'type'         => ['required', 'in:4X4,SUV,BREAK,LUDOSPACE,VAN,BERLINE'],
            'jantes'       => ['required', 'in:16,17,18,19,NONE'],
            'sellerie'     => ['required', 'in:Cuir,Tissus'],
            'couleur'      => ['required', 'regex:/^#[0-9A-Fa-f]{6}$/'],
            'abs'          => ['nullable', 'boolean'],
            'prix'         => ['required', 'numeric', 'min:0'],
            'image1'       => ['nullable', 'image', 'max:2048'],
            'image2'       => ['nullable', 'image', 'max:2048'],
            'image3'       => ['nullable', 'image', 'max:2048'],
            'image4'       => ['nullable', 'image', 'max:2048'],
        ]);

        // Upload des images
        foreach (['image1','image2','image3','image4'] as $img) {
            if ($request->hasFile($img)) {
                $validated[$img.'_path'] = $request->file($img)->store('cars', 'public');
            }
        }

        // Ajout de l'utilisateur connecté
        $validated['user_id'] = Auth::id();

        // Création du véhicule
        Vehicule::create($validated);

        return redirect()
            ->route('home')
            ->with('success', 'Votre annonce a été publiée avec succès !');
    }
    public function destroy(Vehicule $vehicule)
    {
        $user = auth()->user();

        // Vérifie si l'utilisateur est admin ou modo
        if (!in_array($user->role_id, [2, 3])) {
            abort(403, "Vous n'avez pas la permission de supprimer cette annonce.");
        }

        // Supprime les images si elles existent
        foreach (['image1_path','image2_path','image3_path','image4_path'] as $img) {
            if ($vehicule->$img) {
                \Storage::disk('public')->delete($vehicule->$img);
            }
        }

        $vehicule->delete();

         return redirect()
        ->route('catalogue.index')
        ->with('success', 'Annonce supprimée avec succès.');
    }

}
