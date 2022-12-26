import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { VitePluginFonts } from 'vite-plugin-fonts';
import { join } from 'path';

const srcRoot = join(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    VitePluginFonts({
      custom: {
        families: [
          {
            name: 'Tossface',
            local: 'Tossface',
            src: './src/assets/fonts/TossFaceFontMac.ttf',
          },
        ],
        preload: true,
      },
    }),
  ],
  server: {
    port: 3000,
    host: true,
  },
});
