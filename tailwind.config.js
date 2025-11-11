/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins_400Regular'],
      },
      colors: {
        // Custom color palette
        primary: {
          light: '#60a5fa', // light blue
          DEFAULT: '#3b82f6', // blue
          dark: '#1e40af', // dark blue
        },
        hint: {
          light: '#d1d5db', // light gray
          dark: '#5e6774ff', // dark gray
        },
        background: {
          light: '#ffffff',
          dark: '#0f172a',
        },
        text: {
          light: '#0f172a',
          dark: '#f1f5f9',
        },
      },
    },
  },
  plugins: [],
}

