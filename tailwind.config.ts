import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#ed3c6a',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        plusJakarta: ['var(--font-plus-jakarta)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
