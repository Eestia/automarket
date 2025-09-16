import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import FrontLayout from '@/Layouts/Front';

export default function Dashboard({ users, auth }) {

  // ✅ La fonction reste ici, à l’intérieur du composant, avant le return
  const changeRole = (id, role) => {
    Inertia.put(`/admin/users/${id}/role`, { role });
  };

  const deleteUser = (id) => {
    if (confirm('Supprimer cet utilisateur ?')) {
      Inertia.delete(`/admin/users/${id}`);
    }
  };

  return (
    <FrontLayout auth={auth}>
      <div className="container mt-4">
        <h1 className="mb-4 text-center">Gestion des utilisateurs</h1>
        <div className="card shadow-sm">
          <div className="card-body">
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Rôle</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users?.data?.length ? (
                  users.data.map(u => (
                    <tr key={u.id}>
                      <td>{u.nom} {u.prenom}</td>
                      <td>{u.email}</td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          value={u.role_id}
                          onChange={e => changeRole(u.id, parseInt(e.target.value))}
                        >
                          <option value={1}>User</option>
                          <option value={2}>Modo</option>
                          <option value={3}>Admin</option>
                        </select>
                      </td>
                      <td>
                        <button
                          onClick={() => deleteUser(u.id)}
                          className="btn btn-danger btn-sm"
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">Aucun utilisateur trouvé</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </FrontLayout>
  );
}
