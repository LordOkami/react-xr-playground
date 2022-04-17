import { resolve } from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    https: true
  },
  resolve: {
    alias: {
      "@src": resolve(__dirname, "./src"),
    }
  },
  build: {
    outDir: 'build',
  },
  plugins: [
    react(),
  ]
})
