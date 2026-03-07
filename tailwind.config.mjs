/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          light: '#111C30',
          dark: '#060E1A',
        },
        blue: {
          DEFAULT: '#2D7FF9',
          soft: '#6EA8FE',
          pale: '#EBF3FF',
          dark: '#1A5FCC',
        },
        border: '#263247',
        surface: '#141C2E',
        muted: '#8A95A8',
        offwhite: '#E8ECF1',
        success: '#00D68F',
        warning: '#FFB020',
        error: '#FF4D4F',
        whatsapp: '#25D366',
      },
      fontFamily: {
        display: ['Inter', 'Heebo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'Heebo', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
