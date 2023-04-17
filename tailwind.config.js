module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
