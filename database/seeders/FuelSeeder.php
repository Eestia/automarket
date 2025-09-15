<?php

namespace Database\Seeders;

use App\Models\Fuel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FuelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Fuel::create(['fuel' => 'Essence']);
        Fuel::create(['fuel' => 'Diesel']);
        Fuel::create(['fuel' => 'Electrique']);
    }
}
