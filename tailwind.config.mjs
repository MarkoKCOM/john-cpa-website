/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          light: '#141C2E',
        },
        electric: '#2D7FF9',
        mint: '#00D68F',
        charcoal: '#141C2E',
        'off-white': '#E8ECF1',
        'cool-gray': '#8A95A8',
        amber: '#FFB020',
        coral: '#FF4D4F',
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['Inter', 'Heebo', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
