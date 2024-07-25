import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        background: 'var(--background, #020617)',
        'neural-blue': 'var(--Neural-Blue, #00C1FA)',
        'muted-foreground': 'var(--muted-foreground, #94A3B8)',
        border: 'var(--border, #334155)',
      },
    },
  },
  plugins: [],
};
export default config;
