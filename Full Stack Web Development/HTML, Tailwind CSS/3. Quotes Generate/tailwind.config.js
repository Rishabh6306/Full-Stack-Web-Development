/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      'design': ['Righteous', 'sans-serif'],
    }, 
    screens: {
      'ssm': '0px',
      'sm': '580px',
      'md': '769px',
      'mds': '790px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation: {
        'raindrop-fall': 'raindrop-fall 1s linear infinite',
      },
    },
  },
  keyframes: {
    'raindrop-fall': {
      '0%': { transform: 'translateY(-100%)' },
      '100%': { transform: 'translateY(100vh)' },
    },
  },
  plugins: [],
}