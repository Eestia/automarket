<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Fuel;
use App\Models\User;
use App\Models\Vehicule;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VehiculeSeeder extends Seeder
{
    public function run()
    {
        // Récupérer des IDs existants
        $users = User::pluck('id')->toArray();
        $brands = Brand::pluck('id')->toArray();
        $fuels = Fuel::pluck('id', 'fuel')->toArray();

        // Créer les véhicules
        $cars = [
            [
                'user_id'     => 1,
                'brand_id'    => 1,
                'fuel_id'     => $fuels['Essence'],
                'model'       => 'Clio 5',
                'etat'        => 'neuf',
                'annee'       => 2023,
                'kilometrage' => 0,
                'abs'         => true,
                'image1_path' => 'cars/miku.jpg',
                'image2_path' => 'cars/miku.jpg',
                'image3_path' => 'cars/miku.jpg',
                'image4_path' => 'cars/miku.jpg',
                'jantes'      => '16',
                'sellerie'    => 'Tissus',
                'couleur'     => '#FF5733',
                'type'        => 'BERLINE',
                'cylindree'   => '1.2l',
                'prix'        => 18000.00,
                'description' => 'Petite citadine économique et moderne.',
            ],
            [
                'user_id'     => 1,
                'brand_id'    => 2,
                'fuel_id'     => $fuels['Diesel'],
                'model'       => '3008',
                'etat'        => 'occasion',
                'annee'       => 2021,
                'kilometrage' => 35000,
                'abs'         => true,
                'image1_path' => 'cars/anya.jpg',
                'image2_path' => 'cars/anya.jpg',
                'image3_path' => 'cars/anya.jpg',
                'image4_path' => 'cars/anya.jpg',
                'jantes'      => '18',
                'sellerie'    => 'Cuir',
                'couleur'     => '#3498DB',
                'type'        => 'SUV',
                'cylindree'   => '1.5l',
                'prix'        => 25000.00,
                'description' => 'SUV confortable pour la famille.',
            ],
            [
                'user_id'     => 1,
                'brand_id'    => 3,
                'fuel_id'     => $fuels['Electrique'],
                'model'       => 'Model 3',
                'etat'        => 'neuf',
                'annee'       => 2024,
                'kilometrage' => 0,
                'abs'         => true,
                'image1_path' => 'cars/anime.jpg',
                'image2_path' => 'cars/anime.jpg',
                'image3_path' => 'cars/anime.jpg',
                'image4_path' => 'cars/anime.jpg',
                'jantes'      => '19',
                'sellerie'    => 'Cuir',
                'couleur'     => '#000000',
                'type'        => 'BERLINE',
                'cylindree'   => 'NONE',
                'prix'        => 55000.00,
                'description' => 'Véhicule 100% électrique, autonome et performant.',
            ],
            [
                'user_id'     => 1,
                'brand_id'    => 1,
                'fuel_id'     => $fuels['Essence'],
                'model'       => 'Kangoo',
                'etat'        => 'occasion',
                'annee'       => 2019,
                'kilometrage' => 60000,
                'abs'         => false,
                'image1_path' => 'cars/cute.jpg',
                'image2_path' => 'cars/cute.jpg',
                'image3_path' => 'cars/cute.jpg',
                'image4_path' => 'cars/cute.jpg',
                'jantes'      => '16',
                'sellerie'    => 'Tissus',
                'couleur'     => '#27AE60',
                'type'        => 'LUDOSPACE',
                'cylindree'   => '1.5l',
                'prix'        => 12000.00,
                'description' => 'Utilitaire compact pour usage quotidien.',
            ],
            [
                'user_id'     => 1,
                'brand_id'    => 4,
                'fuel_id'     => $fuels['Diesel'],
                'model'       => 'Passat',
                'etat'        => 'neuf',
                'annee'       => 2024,
                'kilometrage' => 0,
                'abs'         => true,
                'image1_path' => 'cars/neko.jpg',
                'image2_path' => 'cars/neko.jpg',
                'image3_path' => 'cars/neko.jpg',
                'image4_path' => 'cars/neko.jpg',
                'jantes'      => '17',
                'sellerie'    => 'Cuir',
                'couleur'     => '#8E44AD',
                'type'        => 'BREAK',
                'cylindree'   => '2l',
                'prix'        => 32000.00,
                'description' => 'Break élégant et spacieux pour toute la famille.',
            ],
        ];

        foreach ($cars as $car) {
            Vehicule::create($car);
        }
    }
}
