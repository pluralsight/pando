const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

module.exports = {
  extends: [
    '../../.eslintrc.cjs',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:testing-library/react',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'react', 'testing-library'],
  rules: {
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
        ignore: ['@react'],
      },
    ],
    'react/jsx-uses-react': OFF,
    'react/prop-types': OFF,
    'react/react-in-jsx-scope': OFF,

    // This is a bug in the latest release
    'testing-library/no-await-sync-events': [
      OFF,
      { eventModules: ['user-event'] },
    ],
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ['./build/*'],
  overrides: [
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
      },
    },
  ],
  settings: {
    'import/extensions': ['.ts', '.tsx'],
    'import/external-module-folders': ['node_modules', 'build'],
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
