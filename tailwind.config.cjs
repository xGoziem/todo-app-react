/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  future: {
    hoverOnlyWhenSupported: true,
  },

  theme: {
    screens: {
      xxs: '324px',
      xs: '356px',
      sm: '400px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1800px',
    },
    extend: {
      colors: {
        colorName: '#color',
      },
      fontFamily: {
        mona: ['Mona Sans', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
      },
      boxShadow: {
        shadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.0)',
      },
    },
  },

  plugins: [],
}
