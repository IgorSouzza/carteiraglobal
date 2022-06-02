module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1'
  },
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.js(x)?',
    '!src/**/*.spec.jsx',
    '!src/**/_app.jsx',
    '!src/pages/**/*',
    '!src/**/_document.jsx',
    '!<rootDir>/src/main/**/*'
  ]
}
