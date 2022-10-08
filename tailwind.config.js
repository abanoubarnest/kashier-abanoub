module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
  },
  variants: {
    opacity: ['hover'],
  },
  plugins: [
    require('tailwind-accent-color')(),
  ]
};
