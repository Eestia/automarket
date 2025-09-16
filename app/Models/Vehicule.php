<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vehicule extends Model
{
    protected $fillable = [
    'user_id',
    'brand_id',    // si tu gères la marque
    'fuel_id',
    'model',
    'etat',
    'annee',
    'kilometrage',
    'abs',
    'image1_path',
    'image2_path',
    'image3_path',
    'image4_path',
    'jantes',
    'sellerie',
    'couleur',
    'type',
    'cylindree',
    'prix',
    'description',
    ];

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function fuel()
    {
        return $this->belongsTo(Fuel::class);
    }
}

