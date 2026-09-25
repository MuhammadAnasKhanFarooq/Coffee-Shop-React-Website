import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false, // Prevents HMR error overlays from blocking the screen
    },
  },
  build: {
    sourcemap: false, // Avoids eval-based source maps in development
  },
})