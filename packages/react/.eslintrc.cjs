const OFF = 'off'
// const WARN = 'warn'
const ERROR = 'error'

module.exports = {
  extends: [
    '../../.eslintrc.cjs',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:testing-library/react',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'react'],
  rules: {
    'import/extensions': [ERROR, 'always', { ignorePackages: true }],
    'import/no-unresolved': [2, { ignore: ['test-utils', '@react-utils'] }],
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
    'import/extensions': ['.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: true,
    },
    react: {
      version: 'detect',
    },
  },
}
