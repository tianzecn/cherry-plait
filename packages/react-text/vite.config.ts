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
                'react/jsx-runtime',
                '@plait/common',
                '@plait/text-plugins',
                'is-hotkey',
                'slate',
                'slate-history',
                'slate-react'
            ]
        }
    }
});
