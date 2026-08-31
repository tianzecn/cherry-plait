import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [react(), dts({ entryRoot: 'src', tsconfigPath: 'tsconfig.json' })],
    build: {
        lib: { entry: 'src/index.ts', formats: ['es', 'cjs'], fileName: 'index' },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                'react-dom/client',
                'react/jsx-runtime',
                '@cherrystudio/plait-react-text',
                '@plait/common',
                '@plait/core',
                '@plait/draw',
                '@plait/layouts',
                '@plait/mind',
                '@plait/text-plugins',
                'classnames',
                'slate',
                'slate-react'
            ]
        }
    }
});
