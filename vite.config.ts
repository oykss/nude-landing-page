import react from '@vitejs/plugin-react';
import { defineConfig, PluginOption } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
	plugins: [react(), ViteImageOptimizer({}) as PluginOption],
});
