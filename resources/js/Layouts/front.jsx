import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Front({ children }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
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
              <li className="nav-item">
                <InertiaLink className="nav-link" href="/vehicules/create">
                  Vendez votre voiture
                </InertiaLink>
              </li>
              <li className="nav-item">
                <InertiaLink className="nav-link" href="/admin/dashboard">
                  Administration
                </InertiaLink>
              </li>
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
            </ul>
          </div>
        </div>
      </nav>

      <main>{children}</main>
    </>
  );
}
