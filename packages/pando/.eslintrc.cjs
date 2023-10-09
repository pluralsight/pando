// const OFF = 'off'
// const WARN = 'warn'
// const ERROR = 'error'

module.exports = {
  extends: ['../../.eslintrc.cjs', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    es2021: true,
  },
}