module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      fontFamily:{
        'titillium': ['Titillium Web'],
      },
      colors: {
        'light-gray': "#DCE0E3",
        'dark-gray': "#6A6A6A"
      },
      spacing:{
        '72':'18rem',
        '84':'21rem',
        '96':'24rem',
        '108':'26rem'
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
  },
  plugins: []
}
