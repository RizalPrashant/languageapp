import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    // allow tunneling the dev server (ngrok) so friends can playtest
    allowedHosts: ['.ngrok-free.dev', '.ngrok-free.app', '.ngrok.io']
  }
})
