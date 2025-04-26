import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
    const result = {
        server: {},
        build: {
            manifest: 'manifest.json'
        },
        resolve: {
            alias: {
              '@': '/resources', 
            },
        },
        plugins: [
            react(),
            laravel({
                input: ['resources/css/app.css', 'resources/views/pages/app.tsx'],
                refresh: true,
            }),
            tailwindcss(),
        ],
    }
    return result;
});
