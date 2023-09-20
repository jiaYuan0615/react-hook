import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    define: {
      'process.env': { ...process.env, ...loadEnv(mode, process.cwd()) }
    },
    build: {
      outDir: 'build',
    },
    plugins: [react()],
  }
})
