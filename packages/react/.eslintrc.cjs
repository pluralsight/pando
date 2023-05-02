const OFF = 'off'
// const WARN = 'warn'
// const ERROR = 'error'

module.exports = {
  extends: [
    '../../.eslintrc.cjs',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/jsx-uses-react': OFF,
    'react/prop-types': OFF,
    'react/react-in-jsx-scope': OFF,
  },
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['./npm/*'],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
