import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Back({ children }) {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg sticky-top">
        <div className="container">
          <InertiaLink className="navbar-brand fw-bold" href="/admin/dashboard">
            Automarket Admin
          </InertiaLink>
        </div>
      </nav>

      <main>{children}</main>
    </>
  );
}
