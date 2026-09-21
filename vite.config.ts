import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base = '/bagtravel/' damit die Seite unter
// https://michifrey.github.io/bagtravel/ korrekt lädt.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? '/bagtravel/',
})
