import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the built bundle works from any path (Surge, GitHub Pages, a subfolder).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { outDir: 'dist', assetsDir: 'assets' },
})
