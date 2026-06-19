import { defineConfig } from 'vite';

export default defineConfig({
    base: '/simpleQr/',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
});
