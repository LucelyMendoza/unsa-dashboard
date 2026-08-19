import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        granate: {
          DEFAULT: '#7A1C28',
          dark: '#5A1620',
          light: '#9E2A38',
        },
        dorado: {
          DEFAULT: '#C5A059',
          light: '#E6CA85',
        },
        papel: '#FAF7F2',
        crema: '#F4ECE1',
        linea: '#E6D9C8',
      },
    },
  },
  plugins: [],
};
export default config;