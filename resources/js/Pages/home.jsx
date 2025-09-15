import React from 'react';
import FrontLayout from '@/Layouts/Front';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Home() {
  return (
    <FrontLayout>
      <div className="p-5 text-center bg-light rounded-3">
        <h1 className="display-4">Bienvenue sur Automarket</h1>
        <p className="lead">Achetez ou vendez votre véhicule facilement.</p>
        <InertiaLink href="/catalogue" className="btn btn-primary btn-lg mt-3">
          Voir le catalogue
        </InertiaLink>
      </div>
    </FrontLayout>
  );
}
