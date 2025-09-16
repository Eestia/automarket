import React, { useState } from 'react';
import FrontLayout from '@/Layouts/Front';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Home({ vehicules = [], auth }) {
  const [search, setSearch] = useState('');

  // Filtrage
  const filteredCars = vehicules.filter(car => {
    const brandName = car.brand?.name?.toLowerCase() || '';
    const modelName = car.model?.toLowerCase() || '';
    const query = search.toLowerCase();
    return brandName.includes(query) || modelName.includes(query);
  });

  return (
    <FrontLayout auth={auth}>
      {/* Bannière + recherche */}
      <div className="p-5 text-center bg-primary rounded-3 mb-5">
        <h1 className="display-4">Bienvenue sur Automarket</h1>
        <p className="lead">Achetez ou vendez votre véhicule facilement.</p>
        <input
          type="text"
          placeholder="Rechercher une voiture..."
          className="form-control mt-3 mx-auto"
          style={{ maxWidth: '400px' }}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Liste des véhicules */}
      <div className="container">
        <h2 className="mb-4">Nos annonces</h2>
        {filteredCars.length > 0 ? (
          <div className="row">
            {filteredCars.map(v => (
              <div key={v.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  {v.image1_path && (
                    <img
                      src={`/storage/${v.image1_path}`}
                      className="card-img-top"
                      alt={v.model}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                      {v.brand?.name} {v.model}
                    </h5>
                    <p className="card-text mb-2">
                      {v.type} • {v.annee} • {v.kilometrage.toLocaleString()} km
                    </p>
                    <p className="fw-bold mb-3">{v.prix.toLocaleString()} €</p>
                    <InertiaLink
                      href={`/cars/${v.id}`}
                      className="btn btn-primary mt-auto"
                    >
                      Voir détails
                    </InertiaLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Aucune voiture disponible pour le moment.</p>
        )}
      </div>
    </FrontLayout>
  );
}
