/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Bebas_Neue','var(--font-bebas)'],
        mono: ['var(--font-inter)'],
        body: ['var(--font-almarai)'],
      }
    },
  },
  plugins: [],
};
