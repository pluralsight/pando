// const OFF = 'off'
// const WARN = 'warn'

const ERROR = 'error'

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:sonarjs/recommended',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    // Prettier must be last
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['sonarjs', 'jest'],
  rules: {
    'default-case': ERROR,
    'default-case-last': ERROR,
    'dot-notation': [
      ERROR,
      {
        allowKeywords: false,
      },
    ],
    'no-confusing-arrow': ERROR,
    'no-duplicate-imports': ERROR,
    'no-empty-function': ERROR,
    'no-negated-condition': ERROR,
    'no-self-compare': ERROR,
    'no-template-curly-in-string': ERROR,
  },
  env: {
    jest: true,
    node: true,
  },
  ignorePatterns: ['.yarn/sdks', 'website/build', 'website/.yarn'],
  globals: {
    __EXPERIMENTAL__: 'readonly',
  },
}
