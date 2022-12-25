import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'path';

const srcRoot = join(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
});
