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
const ERROR = 'error'

// Global rules not working correctly
const globalRules = {
  'default-case': ERROR,
  'default-case-last': ERROR,
  'dot-notation': ERROR,
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
}

module.exports = [
  ...compat['extends'](
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:sonarjs/recommended',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    // Prettier must be last
    'prettier'
  ),
  {
    ignores: [
      '.yarn/sdks',
      'packages/*/build',
      'website/build',
      'packages/*/npm',
      'website/.yarn',
    ],
    languageOptions: {
      globals: {
        ...node,
        ...browser,
        ...jest,
        __EXPERIMENTAL__: 'readonly',
      },
    },
  },
  {
    files: ['**/*.ts', 'packages/**/*.tsx'],
    ignores: [
      'packages/headless-styles/src/components/*/generated/*.module.ts',
      'packages/*/src/*.d.ts',
    ],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      ...globalRules,
      '@typescript-eslint/ban-ts-comment': OFF,
    },
  },
  {
    files: ['packages/**/*.js', 'packages/**/*.jsx'],
    rules: globalRules,
    ignores: ['packages/*/npm'],
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
