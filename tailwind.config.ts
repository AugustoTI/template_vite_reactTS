import pluginScrollbar from 'tailwind-scrollbar'
import { type Config } from 'tailwindcss'
import pluginAnimations from 'tailwindcss-animated'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [pluginAnimations, pluginScrollbar],
} satisfies Config
