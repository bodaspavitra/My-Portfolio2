module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          geometricAnimation: {
            '0%': { transform: 'translateY(0) rotate(0)', opacity: '1' },
            '50%': { transform: 'translateY(-200px) rotate(180deg)', opacity: '0.6' },
            '100%': { transform: 'translateY(0) rotate(360deg)', opacity: '1' },
          },
        },
        animation: {
          geometricAnimation: 'geometricAnimation 10s infinite ease-in-out',
        },
      },
    },
    plugins: [],
  }
  