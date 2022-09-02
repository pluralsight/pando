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

// const OFF = 0
// const WARN = 1
// const ERROR = 2

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:sonarjs/recommended',
    'plugin:jest/recommended',
    // Prettier must be last
    'prettier',
  ],
  parser: require.resolve('@typescript-eslint/parser'),
  plugins: ['@typescript-eslint', 'sonarjs', 'jest'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  ignorePatterns: [
    'packages/*/build',
    'website/build',
    'website/.yarn',
    'packages/headless-styles/src/components/*/generated/*.module.ts',
  ],
}
