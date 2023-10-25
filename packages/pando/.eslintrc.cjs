// const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

module.exports = {
  extends: [
    '../../.eslintrc.cjs',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['import'],
  rules: {
    'import/extensions': [ERROR, 'always', { ignorePackages: true }],
    'import/order': [
      WARN,
      {
        groups: [
          'builtin',
          ['external', 'internal'],
          'parent',
          ['sibling', 'index'],
        ],
      },
    ],
    'import/no-unresolved': [
      ERROR,
      {
        ignore: ['@pando'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.mts'],
      extends: 'plugin:import/typescript',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'import/no-unresolved': 'off', // ts(2307)
      },
    },
  ],
  settings: {
    'import/extensions': ['.mts'],
    'import/external-module-folders': ['node_modules', 'packages'],
    'import/ignore': ['node_modules', '.json$'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.mts'],
    },
    'import/resolver': 'node',
  },
  env: {
    node: true,
    es2021: true,
  },
}
