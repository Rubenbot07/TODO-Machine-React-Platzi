import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
    minify: true,
    outDir: 'dist'
  },
  base: 'https://Rubenbot07.github.io/TODO-Machine-React-Platzi'

})
