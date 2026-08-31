import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const root = path.resolve(__dirname, '../../..');

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@cherrystudio/plait-react-board': path.join(root, 'packages/react-board/dist/index.js'),
            '@cherrystudio/plait-react-text': path.join(root, 'packages/react-text/dist/index.js'),
            '@plait/core': path.join(root, 'dist/core/fesm2022/plait-core.mjs'),
            '@plait/common': path.join(root, 'dist/common/fesm2022/plait-common.mjs'),
            '@plait/text-plugins': path.join(root, 'dist/text-plugins/fesm2022/plait-text-plugins.mjs'),
            '@plait/layouts': path.join(root, 'dist/layouts/fesm2022/plait-layouts.mjs'),
            '@plait/draw': path.join(root, 'dist/draw/fesm2022/plait-draw.mjs'),
            '@plait/mind': path.join(root, 'dist/mind/fesm2022/plait-mind.mjs')
        }
    }
});
