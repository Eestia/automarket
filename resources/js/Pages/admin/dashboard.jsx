import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import FrontLayout from '@/Layouts/Front';

export default function Dashboard({ users, brands, auth }) {

  // --- GESTION UTILISATEURS ---
  const changeRole = (id, role) => {
    Inertia.put(`/admin/users/${id}/role`, { role });
  };

  const deleteUser = (id) => {
    if (confirm('Supprimer cet utilisateur ?')) {
      Inertia.delete(`/admin/users/${id}`);
    }
  };

  // --- GESTION MARQUES ---
  const [name, setName] = useState('');
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');

  const createBrand = (e) => {
    e.preventDefault();
    Inertia.post(route('admin.brands.store'), { name }, { onSuccess: () => setName('') });
  };

  const updateBrand = (id) => {
    Inertia.put(route('admin.brands.update', id), { name: editName }, { onSuccess: () => setEditId(null) });
  };

  const deleteBrand = (id) => {
    if (confirm('Supprimer cette marque ?')) {
      Inertia.delete(route('admin.brands.destroy', id));
    }
  };

  return (
    <FrontLayout auth={auth}>
      <div className="container mt-4">
        {/* ==== UTILISATEURS ==== */}
        <h1 className="mb-4 text-center">Gestion des utilisateurs</h1>
        <div className="card shadow-sm mb-5">
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

        {/* ==== MARQUES ==== */}
        <h1 className="mb-4 text-center">Gestion des marques</h1>

        <form onSubmit={createBrand} className="d-flex mb-4">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nouvelle marque"
            className="form-control me-2"
            required
          />
          <button className="btn btn-primary">Ajouter</button>
        </form>

        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>Nom</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {brands.map(b => (
              <tr key={b.id}>
                <td>
                  {editId === b.id ? (
                    <input
                      value={editName}
                      onChange={e => setEditName(e.target.value)}
                      className="form-control"
                    />
                  ) : (
                    b.name
                  )}
                </td>
                <td>
                  {editId === b.id ? (
                    <>
                      <button onClick={() => updateBrand(b.id)} className="btn btn-success btn-sm me-2">Sauver</button>
                      <button onClick={() => setEditId(null)} className="btn btn-secondary btn-sm">Annuler</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => { setEditId(b.id); setEditName(b.name); }} className="btn btn-warning btn-sm me-2">Modifier</button>
                      <button onClick={() => deleteBrand(b.id)} className="btn btn-danger btn-sm">Supprimer</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FrontLayout>
  );
}
