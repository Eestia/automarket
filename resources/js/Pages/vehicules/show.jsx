import React from 'react';
import FrontLayout from '@/Layouts/Front';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function ShowVehicule({ vehicule, auth }) {
    return (
        <FrontLayout auth={auth}>
            <div className="container py-5">
                <InertiaLink href="/catalogue" className="btn btn-secondary mb-4">
                    ← Retour au catalogue
                </InertiaLink>

                <div className="row">
                   <div className="col-md-6">
                        <div id="vehiculeCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {['image1_path','image2_path','image3_path','image4_path'].map((img, index) => 
                                    vehicule[img] ? (
                                        <div key={img} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                            <img
                                                src={`/storage/${vehicule[img]}`}
                                                className="d-block w-100"
                                                alt={`${vehicule.model} ${index + 1}`}
                                                style={{ maxHeight: '400px', objectFit: 'cover' }}
                                            />
                                        </div>
                                    ) : null
                                )}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#vehiculeCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Précédent</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#vehiculeCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Suivant</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1>{vehicule.brand?.name} {vehicule.model}</h1>
                        <p className="text-muted mb-3">{vehicule.type} - {vehicule.annee}</p>

                        <ul className="list-group mb-3">
                            <li className="list-group-item">Kilométrage: {vehicule.kilometrage.toLocaleString()} km</li>
                            <li className="list-group-item">Carburant: {vehicule.fuel_id}</li>
                            <li className="list-group-item">Cylindrée: {vehicule.cylindree}</li>
                            <li className="list-group-item">Jantes: {vehicule.jantes}</li>
                            <li className="list-group-item">Sellerie: {vehicule.sellerie}</li>
                            <li className="list-group-item">Couleur: <span style={{ backgroundColor: vehicule.couleur, display: 'inline-block', width: '20px', height: '20px', marginLeft: '5px' }}></span></li>
                            <li className="list-group-item">ABS: {vehicule.abs ? 'Oui' : 'Non'}</li>
                        </ul>

                        <h3 className="fw-bold">{vehicule.prix.toLocaleString()} €</h3>
                        {auth.user && (auth.user.role_id >= 2 || auth.user.id === vehicule.user_id) && (
                            <button
                                onClick={() => {
                                    if (confirm('Êtes-vous sûr de vouloir supprimer cette annonce ?')) {
                                        Inertia.delete(route('vehicules.destroy', vehicule.id));
                                    }
                                }}
                                className="btn btn-danger"
                            >
                                Supprimer
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </FrontLayout>
    );
}
