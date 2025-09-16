import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/react';

export default function UserList({ users, roles }) {
    const changeRole = (userId, roleId) => {
        Inertia.patch(route('admin.users.updateRole', userId), { role_id: roleId });
    };

    const deleteAnnonces = (userId) => {
        if (confirm('Supprimer toutes les annonces de cet utilisateur ?')) {
            Inertia.delete(route('admin.users.deleteAnnonces', userId));
        }
    };

    return (
        <div className="container py-4">
            <h1 className="mb-4">Gestion des utilisateurs</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Rôle</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => (
                        <tr key={u.id}>
                            <td>{u.nom} {u.prenom}</td>
                            <td>{u.email}</td>
                            <td>
                                <select
                                    className="form-select"
                                    value={u.role_id}
                                    onChange={e => changeRole(u.id, e.target.value)}
                                >
                                    {roles.map(r => (
                                        <option key={r.id} value={r.id}>{r.name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteAnnonces(u.id)}
                                >
                                    Supprimer ses annonces
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
