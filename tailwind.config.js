module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/presentation/templates/**/*.{js,jsx}',
    './src/presentation/components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Epilogue', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Epilogue', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Epilogue', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Epilogue', '-apple-system', 'BlinkMacSystemFont'],
        body: ['Epilogue', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      },
      fontSize: {
        xxs: '0.63rem'
      },
      colors: {
        'carteira-global-black': '#0A0D0D',
        'carteira-global-green': '#09B682',
        'carteira-global-purple': '#7B1CF3',
        'carteira-global-blue': '#21A3ED',
        'carteira-global-gray': '#FCFCFC',
        'carteira-global-gray-medium': '#ECECEC',
        'carteira-global-gray-dark': '#343A3A'
      },
      boxShadow: {
        'carteira-card': '0px 0px 20px rgba(10, 13, 13, 0.12)'
      }
    }
  },
  plugins: []
}
