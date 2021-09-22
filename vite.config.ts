import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [solidPlugin(), vanillaExtractPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  resolve: {
    alias: {
      '@shared': '/src/shared',
      '@home': '/src/modules/home',
      '@testA': '/src/modules/testA',
      '@testB': '/src/modules/testB',
    },
  },
});
