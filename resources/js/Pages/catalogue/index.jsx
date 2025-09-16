import React, { useState } from 'react';
import FrontLayout from '@/Layouts/Front';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Catalogue({ vehicules, auth }) {
  const [search, setSearch] = useState('');

  // Filtrage par marque ou modèle
  const filteredCars = vehicules.filter(car => {
    const brandName = car.brand?.name.toLowerCase() || '';
    const modelName = car.model.toLowerCase();
    const query = search.toLowerCase();
    return brandName.includes(query) || modelName.includes(query);
  });

  return (
    <FrontLayout auth={auth}>
      <div className="container py-5">
        <h1 className="mb-4">Catalogue complet des voitures</h1>

        <input
          type="text"
          placeholder="Rechercher une voiture..."
          className="form-control mb-4"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {filteredCars.length > 0 ? (
          <div className="row">
            {filteredCars.map(car => (
              <div key={car.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  {car.image1_path && (
                    <img
                      src={`/storage/${car.image1_path}`}
                      className="card-img-top"
                      alt={car.model}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{car.brand?.name} {car.model}</h5>
                    <p className="card-text mb-2">
                      {car.type} - {car.annee} - {car.kilometrage.toLocaleString()} km
                    </p>
                    <p className="card-text fw-bold mb-3">{car.prix.toLocaleString()} €</p>
                    <InertiaLink
                      href={`/cars/${car.id}`}
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
