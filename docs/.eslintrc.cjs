// const OFF = 'off'
// const WARN = 'warn'
// const ERROR = 'error'

module.exports = {
  extends: ['plugin:astro/recommended', 'plugin:jsx-a11y/recommended'],
  plugins: ['import', 'react', 'jest', 'sonarjs'],
  ignorePatterns: ['**/styled-system/*', '**/dist/*'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    {
      files: ['**/*.ts?(x)'],
      extends: 'plugin:import/typescript',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'import/no-unresolved': 'off', // ts(2307)
        '@typescript-eslint/triple-slash-reference': 'off',
      },
    },
  ],
  settings: {
    'import/extensions': ['.ts', '.tsx'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/ignore': ['node_modules', '.json$', '.(scss|less|css|styl)$'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': 'node',
    react: {
      version: 'detect',
    },
  },
}
