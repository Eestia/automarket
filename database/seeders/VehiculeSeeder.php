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
                'user_id'     => $users[array_rand($users)],
                'brand_id'    => $brands[array_rand($brands)],
                'fuel_id'     => $fuels['Essence'],
                'model'       => 'Clio 5',
                'etat'        => 'neuf',
                'annee'       => 2023,
                'kilometrage' => 0,
                'abs'         => true,
                'image1_path' => 'cars/clio1.jpg',
                'image2_path' => 'cars/clio2.jpg',
                'image3_path' => 'cars/clio3.jpg',
                'image4_path' => null,
                'jantes'      => '16',
                'sellerie'    => 'Tissus',
                'couleur'     => '#FF5733',
                'type'        => 'BERLINE',
                'cylindree'   => '1.2l',
                'prix'        => 18000.00,
                'description' => 'Petite citadine économique et moderne.',
            ],
            [
                'user_id'     => $users[array_rand($users)],
                'brand_id'    => $brands[array_rand($brands)],
                'fuel_id'     => $fuels['Diesel'],
                'model'       => 'Peugeot 3008',
                'etat'        => 'occasion',
                'annee'       => 2021,
                'kilometrage' => 35000,
                'abs'         => true,
                'image1_path' => 'cars/3008-1.jpg',
                'image2_path' => 'cars/3008-2.jpg',
                'image3_path' => null,
                'image4_path' => null,
                'jantes'      => '18',
                'sellerie'    => 'Cuir',
                'couleur'     => '#3498DB',
                'type'        => 'SUV',
                'cylindree'   => '1.5l',
                'prix'        => 25000.00,
                'description' => 'SUV confortable pour la famille.',
            ],
            [
                'user_id'     => $users[array_rand($users)],
                'brand_id'    => $brands[array_rand($brands)],
                'fuel_id'     => $fuels['Electrique'],
                'model'       => 'Tesla Model 3',
                'etat'        => 'neuf',
                'annee'       => 2024,
                'kilometrage' => 0,
                'abs'         => true,
                'image1_path' => 'cars/tesla3-1.jpg',
                'image2_path' => 'cars/tesla3-2.jpg',
                'image3_path' => 'cars/tesla3-3.jpg',
                'image4_path' => null,
                'jantes'      => '19',
                'sellerie'    => 'Cuir',
                'couleur'     => '#000000',
                'type'        => 'BERLINE',
                'cylindree'   => 'NONE',
                'prix'        => 55000.00,
                'description' => 'Véhicule 100% électrique, autonome et performant.',
            ],
            [
                'user_id'     => $users[array_rand($users)],
                'brand_id'    => $brands[array_rand($brands)],
                'fuel_id'     => $fuels['Essence'],
                'model'       => 'Renault Kangoo',
                'etat'        => 'occasion',
                'annee'       => 2019,
                'kilometrage' => 60000,
                'abs'         => false,
                'image1_path' => 'cars/kangoo-1.jpg',
                'image2_path' => null,
                'image3_path' => null,
                'image4_path' => null,
                'jantes'      => '16',
                'sellerie'    => 'Tissus',
                'couleur'     => '#27AE60',
                'type'        => 'LUDOSPACE',
                'cylindree'   => '1.5l',
                'prix'        => 12000.00,
                'description' => 'Utilitaire compact pour usage quotidien.',
            ],
            [
                'user_id'     => $users[array_rand($users)],
                'brand_id'    => $brands[array_rand($brands)],
                'fuel_id'     => $fuels['Diesel'],
                'model'       => 'Volkswagen Passat',
                'etat'        => 'neuf',
                'annee'       => 2024,
                'kilometrage' => 0,
                'abs'         => true,
                'image1_path' => 'cars/passat-1.jpg',
                'image2_path' => 'cars/passat-2.jpg',
                'image3_path' => 'cars/passat-3.jpg',
                'image4_path' => 'cars/passat-4.jpg',
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
