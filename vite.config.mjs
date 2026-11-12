import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig(({ command, isPreview }) => ({
  base: (command === 'build' || isPreview) ? (process.env.PAGES_BASE_PATH || '/visual-designer/') : '/',
  plugins: [react()],
}));

