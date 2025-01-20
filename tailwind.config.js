/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
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
        main: "url('/assets/img/main-bg.jpg')",
        driveImg: "url('/assets/img/drive-graphic.jpg')",
        driveImgMobile: "url('/assets/img/drive-bg-mobile.jpg')",
        officeImg: "url('/assets/img/office.jpg')",
      },
      fontSize: {
        clampH1: 'clamp(2.6rem, 4vw, 4.5rem)', // Cria uma classe personalizada
        clampH2: 'clamp(1.8rem, 2vw, 2rem)', // Cria uma classe personalizada
        clampParagraph: 'clamp(0.8rem, 0.8vw, 1rem)', // Cria uma classe personalizada
      },
    },
  },
  plugins: [],
}

