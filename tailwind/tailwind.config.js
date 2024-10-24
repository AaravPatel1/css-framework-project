// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',  // Custom blue color for primary elements
        secondary: '#EC4899', // Custom pink color for secondary elements
        accent: '#10B981',   // Custom green for accents
      },
    },
  },
  plugins: [],
}
