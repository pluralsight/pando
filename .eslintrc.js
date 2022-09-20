/*
 * IMPORTANT!
 *
 * Any changes made to this file must also be made to .eslint.config.js.
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

const OFF = 'off'
// const WARN = 'warn'
// const ERROR = 'error'

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:sonarjs/recommended',
    'plugin:jest/recommended',
    // Prettier must be last
    'prettier',
  ],
  parser: require.resolve('@typescript-eslint/parser'),
  plugins: ['@typescript-eslint', 'sonarjs', 'jest'],
  rules: {
    '@typescript-eslint/ban-ts-comment': OFF,
    '@typescript-eslint/no-var-requires': OFF,
    'react/prop-types': OFF,
    'react/jsx-uses-react': OFF,
    'react/react-in-jsx-scope': OFF,
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  ignorePatterns: [
    '.yarn/sdks',
    'packages/*/build',
    'packages/headless-styles/src/components/*/generated/*.module.ts',
    'website/build',
    'website/.yarn',
  ],
}
