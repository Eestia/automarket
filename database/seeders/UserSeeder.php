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
            'nom' => 'Moderateur',
            'prenom' => 'Mod',
            'email' => 'modo@example.com',
            'password' => Hash::make('password'), 
            'role_id' => 2, 
        ]);
        User::create([
            'nom'      => 'Admin',
            'prenom'   => 'Super',
            'email'    => 'admin@example.com',
            'password' => Hash::make('password'),  
            'role_id'  => 3,                       
        ]);
        
    }
}
