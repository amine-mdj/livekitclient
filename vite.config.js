import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // ✅ Makes it accessible on the network
    port: 5173 ,      // Optional: you can change the port if needed
    strictPort: true,
    allowedHosts: ['4d581488ab8d.ngrok-free.app'],
    https: false
  }
})
