// const OFF = 'off'
// const WARN = 'warn'
// const ERROR = 'error'

module.exports = {
  extends: ['../../.eslintrc.cjs'],
  env: {
    es2021: true,
    node: true,
  },
  ignorePatterns: ['./build-mobile/*', './npm'],
}
