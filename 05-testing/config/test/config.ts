import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    restoreMocks: true,
    environment: 'jsdom',
    setupFiles: ['./config/test/setup.ts'],
  },
  resolve: {
    alias: {
      '#': path.resolve(__dirname, '../../src'),
    },
  },
});
