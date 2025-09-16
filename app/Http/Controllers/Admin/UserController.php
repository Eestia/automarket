<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Affiche le dashboard admin avec la liste des utilisateurs
     */
    public function index()
    {
        $users = User::with('role')->paginate(10);

        return Inertia::render('admin/dashboard', [
        'users' => $users,   // ici on envoie le paginator tel quel
        'auth' => [
            'user' => auth()->user() ? [
                'id' => auth()->user()->id,
                'nom' => auth()->user()->nom,
                'prenom' => auth()->user()->prenom,
                'role' => auth()->user()->role->name ?? auth()->user()->role_id,
            ] : null
        ],
    ]);

    }

    /**
     * Met à jour le rôle d'un utilisateur
     */
    public function updateRole(Request $request, User $user)
    {
         $request->validate([
        'role' => 'required|integer|exists:roles,id',
        ]);

        // Convertit le rôle en ID
        $user->update(['role_id' => $request->role]);

        return redirect()->route('admin.dashboard');
    }

    /**
     * Supprime un utilisateur
     */
    public function destroy(User $user)
    {
        $user->delete();

        return back()->with('success', 'Utilisateur supprimé avec succès.');
    }
}
