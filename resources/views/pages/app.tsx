import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

console.log('App started');

createInertiaApp({
    id: 'app',
    progress: {
        color: '#4B5563',
        showSpinner: false
    },
    resolve: (name) => {
        console.log(`Resolving page: resources/views/pages/${name}.tsx`);
        return resolvePageComponent(
            `./${name}.tsx`, 
            import.meta.glob('./**/*.tsx')
        );
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
