import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './packages/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem', // Default padding for all screens
        sm: '2rem', // Padding for small screens
      },
    },
    extend: {
      colors: {
        bodyBg: '#1D1A1A',
        bodyText: '#e3e3e3',
      },
    },
  },
} satisfies Config;
