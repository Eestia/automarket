<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    public function run()
    {
        Brand::create([
            ['name' => 'Renault', 'logo' => 'brands/renault.png'],
            ['name' => 'Peugeot', 'logo' => 'brands/peugeot.png'],
            ['name' => 'Tesla', 'logo' => 'brands/tesla.png'],
            ['name' => 'Volkswagen', 'logo' => 'brands/volkswagen.png'],
            ['name' => 'BMW', 'logo' => 'brands/bmw.png'],
        ]);
    }
}
