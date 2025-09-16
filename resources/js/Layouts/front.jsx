import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Front({ children, auth }) {
  const user = auth?.user;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)' }}>

        <div className="container">
          <InertiaLink className="navbar-brand fw-bold d-flex align-items-center" href="/">
            <img src="/storage/logo.png" alt="Automarket" height="30" className="me-2" />
            Automarket
          </InertiaLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <InertiaLink className="nav-link" href="/catalogue">
                  Catalogue
                </InertiaLink>
              </li>

              {user && (
                <li className="nav-item">
                  <InertiaLink className="nav-link" href="/vehicules/create">
                    Vendez votre voiture
                  </InertiaLink>
                </li>
              )}

            {user && user.role === 'admin' && (
            <li className="nav-item">
                <InertiaLink className="nav-link" href="/admin/dashboard">
                Administration
                </InertiaLink>
            </li>
            )}

              {!user ? (
                <>
                  <li className="nav-item">
                    <InertiaLink className="nav-link" href="/login">
                      Connexion
                    </InertiaLink>
                  </li>
                  <li className="nav-item">
                    <InertiaLink className="nav-link" href="/register">
                      Inscription
                    </InertiaLink>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                    <a
                        href="#"
                        className="nav-link"
                        onClick={(e) => {
                        e.preventDefault(); // empêche la navigation
                        Inertia.post(route('logout'));
                        }}
                    >
                        Déconnexion
                    </a>
                    </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-primary text-white text-center py-3 mt-5">
        &copy; {new Date().getFullYear()} Automarket. Tous droits réservés.
      </footer>
    </>
  );
}
