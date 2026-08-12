import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [react()],
  build: mode === 'highspot'
    ? {
        rollupOptions: {
          output: {
            codeSplitting: false,
          },
        },
      }
    : undefined,
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
    pool: 'threads',
  },
}))
