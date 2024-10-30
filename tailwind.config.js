/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#365E32', // main primary color
        },
        secondary: {
          DEFAULT: '#81A263', // main primary color
        },
        main: {
          DEFAULT: '#ECF3F4', // main primary color
        },
      },
    },
  },
  plugins: [],
};