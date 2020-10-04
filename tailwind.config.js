module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: {
          red: 'hsl(0, 100%, 74%)',
          green: 'hsl(154, 59%, 51%)',
          greenHover: 'hsl(154, 59%, 60%)',
        },
        secondary: {
          blue: 'hsl(248, 32%, 49%)',
          blueHover: 'hsl(248, 32%, 58%)',
        },
        neutral: {
          darkBlue: 'hsl(249, 10%, 26%)',
          grayishBlue: 'hsl(246, 25%, 77%)',
        },
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif']
      },
      backgroundImage: theme => ({
        mobileBg: "url('./images/bg-intro-mobile.png')",
        desktopBg: "url('./images/bg-intro-desktop.png')",
      }),
      boxShadow: {
        shDefault: '0 8px rgba(62, 60, 73, 0.2)',
      },
    },
  },
  variants: {},
  plugins: [],
}
