import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
import  Layout  from '@/layouts/Layout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: async (name) => {
        const pages = {
            ...import.meta.glob('./pages/**/*.tsx'),
            ...import.meta.glob('./pages/**/*.jsx'),
        };

        const pageImport = pages[`./pages/${name}.tsx`] || pages[`./pages/${name}.jsx`];

        if (!pageImport) {
            console.error('Available pages:', Object.keys(pages));
            throw new Error(`Page not found: ${name}`);
        }

        const page = await pageImport(); // <-- await the dynamic import

        // Set default layout if not defined
        page.default.layout = page.default.layout || ((page) => <Layout>{page}</Layout>);

        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <StrictMode>
                <App {...props} />
            </StrictMode>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
