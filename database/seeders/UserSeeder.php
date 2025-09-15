<?php
namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        // Rôles déjà créés : 1=user, 2=modo, 3=admin

        User::create([
            'nom'       => 'Test',
            'prenom'    => 'User',
            'email'     => 'test@example.com',
            'tel'       => '0600000000',
            'password'  => Hash::make('password'),
            'role_id'   => 1, // user
        ]);

        User::create([
            'nom'       => 'Admin',
            'prenom'    => 'User',
            'email'     => 'admin@example.com',
            'tel'       => '0600000001',
            'password'  => Hash::make('adminpass'),
            'role_id'   => 3, // admin
        ]);
    }
}
