import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages configuration
  // If deploying to https://<username>.github.io/<repo-name>/, set base to '/<repo-name>/'
  // If deploying to a custom domain or https://<username>.github.io/, use '/'
  base: '/',
})
