// tailwind.config.js

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  // Quét tất cả các file trong thư mục app
    './components/**/*.{js,ts,jsx,tsx}' // Quét tất cả các file trong thư mục components
  ],
  theme: {
    extend: {
      keyframes: {
        bubble: {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0deg)', // Vị trí ban đầu và cuối
          },
          '50%': {
            transform: 'translateY(-10px) rotate(15deg)', // Lắc nhẹ lên và xoay giữa
          },
        },
      },
      animation: {
        bubble: 'bubble 2s ease-in-out infinite', // Hiệu ứng diễn ra trong 2 giây và lặp lại mãi mãi
      },
    },
  },
  plugins: [],
};
