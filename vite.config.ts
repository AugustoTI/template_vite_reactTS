import react from '@vitejs/plugin-react-swc'
import tsconfigPath from 'vite-tsconfig-paths'
import { configDefaults, defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPath()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    exclude: [...configDefaults.exclude, 'vitest.setup.ts'],
  },
  server: {
    port: 3000,
    open: true,
  },
})
