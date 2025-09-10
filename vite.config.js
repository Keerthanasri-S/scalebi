import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/scalebi/' : '/',  // ✅ dynamic base
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          support: resolve(__dirname, 'support.html'),
          home: resolve(__dirname, 'home.html'),
        },
      },
    },
  }
})
