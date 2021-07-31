module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: ['18px', '24px'],
      base: ['36px', '42px'],
      lg: ['48px', '56px'],
      xl: ['64px', '72px'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
