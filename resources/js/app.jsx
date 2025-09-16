import '../css/app.css';
import './bootstrap';
import 'bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Crée un map global des pages pour gérer la casse
const pages = import.meta.glob('./Pages/**/*.jsx');

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        // Convertit le nom Inertia en minuscule pour correspondre à ton projet
        const lowerName = name.toLowerCase();

        // Cherche le chemin exact correspondant dans le glob
        const path = Object.keys(pages).find((p) =>
            p.toLowerCase().endsWith(`${lowerName}.jsx`)
        );

        if (!path) {
            throw new Error(`Page not found: ${name}`);
        }

        return resolvePageComponent(path, pages);
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
