const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:sonarjs/recommended',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    // Prettier must be last
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'sonarjs', 'jest', 'react', 'react-refresh'],
  rules: {
    '@typescript-eslint/ban-ts-comment': OFF,
    '@typescript-eslint/no-var-requires': OFF,
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
    'react/jsx-uses-react': OFF,
    'react/no-unknown-property': [ERROR, { ignore: ['tab-index'] }],
    'react/prop-types': OFF,
    'react/react-in-jsx-scope': OFF,
    'react-refresh/only-export-components': WARN,
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  ignorePatterns: [
    '.yarn/sdks',
    'packages/*/build',
    'packages/*/npm/*',
    'packages/headless-styles/src/components/*/generated/*.module.ts',
    'website/build',
    'website/.yarn',
  ],
  globals: {
    __EXPERIMENTAL__: 'readonly',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
