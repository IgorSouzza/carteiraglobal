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
      }
    }
  },
  plugins: []
}
