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
        },
        secondary: 'hsl(248, 32%, 49%)',
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
      })
    },
  },
  variants: {},
  plugins: [],
}
