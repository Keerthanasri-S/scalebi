import { defineConfig } from 'vite'
import { resolve } from 'path'
import { readdirSync } from 'fs'

function getHtmlInputs(dir) {
  const files = readdirSync(dir, { withFileTypes: true })
  const inputs = {}

  for (const file of files) {
    if (file.isFile() && file.name.endsWith('.html')) {
      const name = file.name.replace('.html', '')
      inputs[name] = resolve(dir, file.name)
    }
  }
  return inputs
}

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/scalebi/' : '/',  // ✅ dynamic base
    build: {
      rollupOptions: {
        input: {
          ...getHtmlInputs(resolve(__dirname, './'))
        }
      }
    }
  }
})
