import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the built bundle works from any path (Surge, GitHub Pages, a subfolder).
// Dev port honours $PORT (several worktrees of this repo can run `npm run dev`
// at once — each gets assigned a free port rather than fighting over 5173).
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { port: Number(process.env.PORT) || 5173 },
  build: { outDir: 'dist', assetsDir: 'assets' },
})
