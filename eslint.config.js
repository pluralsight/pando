/*
 * Any changes made to this file must also be made to .eslintrc.js.
 *
 * ESLint is using the eslint.config.js file to lint.
 * The .eslintrc.js file is needed too, because:
 *
 * 1. There are tests that expect .eslintrc.js to be present to actually run.
 * 2. ESLint VS Code extension expects eslintrc config files to be
 *    present to work correctly.
 *
 * Once we no longer need to support both eslintrc and flat config, we will
 * remove .eslintrc.js.
 */

const { browser, node, jest } = require('globals')
const { FlatCompat } = require('@eslint/eslintrc')
const markdown = require('eslint-plugin-markdown')
const tsParser = require('@typescript-eslint/parser')
const typescript = require('@typescript-eslint/eslint-plugin')

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const OFF = 'off'
// const WARN = 'warn'
// const ERROR = 'error'

module.exports = [
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:sonarjs/recommended',
    'plugin:jest/recommended',
    // Prettier must be last
    'prettier'
  ),
  {
    ignores: ['packages/*/build', 'website/build', 'website/.yarn'],
    languageOptions: {
      globals: {
        ...node,
        ...browser,
        ...jest,
      },
    },
  },
  {
    files: ['**/*.ts', 'packages/**/*.tsx'],
    ignores: [
      'packages/headless-styles/src/components/*/generated/*.module.ts',
    ],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      'react/prop-types': OFF,
      'react/jsx-uses-react': OFF,
      'react/react-in-jsx-scope': OFF,
    },
  },
  {
    files: ['packages/**/*.js', 'packages/**/*.jsx'],
    rules: {
      'react/prop-types': OFF,
      'react/jsx-uses-react': OFF,
      'react/react-in-jsx-scope': OFF,
    },
  },
  {
    files: ['website/src/**/*.js'],
    rules: {
      'react/prop-types': OFF,
    },
  },
  {
    files: ['**/*.md'],
    plugins: {
      markdown,
    },
    processor: 'markdown/markdown',
  },
]
