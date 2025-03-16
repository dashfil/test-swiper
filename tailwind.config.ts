import type { Config } from 'tailwindcss'
import { heroui } from "@heroui/react"

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      grey: '#E6E8EC',
      black: '#141416',
      white: '#ffffff',
      lightGrey: '#94A3B8',
      darkGrey: '#C5C5C5'
    }
  },
  darkMode: 'class',
  plugins: [heroui({
    themes: {
      dark: {
        colors: {
          danger: {
            100: '#2d1c1c',
            DEFAULT: '#FF5858',
          },
        },
      },
    }
  })],
}
export default config
