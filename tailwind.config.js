/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        plusJakarta: ['Plus Jakarta Sans', 'serif'],
      },
      colors: {
        mainWhite: '#F9F9F9',
        grayBg: '#F0F0F0',
        textColor: '#222831',
        secondaryTextColor: '#878C91',
        primaryRed: '#FF204E',
        secondaryRed: '#94122D',
        accentRed: '#FF4F73'
      },
      backgroundImage: {
        main: "url('/src/assets/img/main-bg.jpg')",
        driveImg: "url('/src/assets/img/drive-graphic.jpg')"
      },
    },
  },
  plugins: [],
}

