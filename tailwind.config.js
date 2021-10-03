module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'logo': "url('../public/land_logo.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
