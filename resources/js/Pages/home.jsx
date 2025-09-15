import React from 'react';
import FrontLayout from '@/Layouts/Front';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Home({ cars = [] }) {
  return (
    <FrontLayout>
      {/* Section d'accueil */}
      <div className="p-5 text-center bg-light rounded-3 mb-5">
        <h1 className="display-4">Bienvenue sur Automarket</h1>
        <p className="lead">Achetez ou vendez votre véhicule facilement.</p>
        <InertiaLink href="/catalogue" className="btn btn-primary btn-lg mt-3">
          Voir le catalogue
        </InertiaLink>
      </div>

      {/* Section voitures */}
      <div className="container">
        <h2 className="mb-4">Nos dernières voitures</h2>
        {cars.length > 0 ? (
          <div className="row">
            {cars.map((car) => (
              <div key={car.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  {/* Image principale */}
                  <img
                    src={`/storage/${car.image1_path}`}
                    className="card-img-top"
                    alt={car.model}
                  />
                  <div className="card-body d-flex flex-column">
                    {/* Titre */}
                    <h5 className="card-title">
                      {car.brand?.name} {car.model}
                    </h5>

                    {/* Informations */}
                    <p className="card-text mb-2">
                      {car.type} - {car.annee} - {car.kilometrage.toLocaleString()} km
                    </p>
                    <p className="card-text fw-bold mb-3">{car.prix.toLocaleString()} €</p>

                    {/* Bouton vers la page détails */}
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
