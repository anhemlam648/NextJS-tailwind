// tailwind.config.js
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  
    './components/**/*.{js,ts,jsx,tsx}' 
  ],
  theme: {
    extend: {
      keyframes: {
        bubble: {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(-10px) rotate(15deg)', 
          },
        },
      },
      animation: {
        bubble: 'bubble 2s ease-in-out infinite', 
      },
    },
  },
  plugins: [],
};
