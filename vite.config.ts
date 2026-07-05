import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
// On enlève netlify pour GitHub Pages

const config = defineConfig({
  plugins: [
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart({
      // Mode static pour GitHub Pages
      server: {
        preset: 'static',
      },
    }),
    viteReact(),
  ],
  base: '/wyxx775/', // Important pour GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})

export default config
