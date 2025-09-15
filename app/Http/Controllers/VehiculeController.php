<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVehiculeRequest;
use App\Models\Vehicule;
use Illuminate\Http\Request;

class VehiculeController extends Controller
{
    public function create()
    {
        return view('vehicules.create');
    }
}
