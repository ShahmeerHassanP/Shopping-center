import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/shopping-center/', // Replace with your repository name
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
