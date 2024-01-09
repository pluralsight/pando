const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

module.exports = {
  extends: [
    // '../.eslintrc.cjs',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:import/recommended',
    // 'plugin:import/typescript',
    // 'plugin:react/recommended',
    // 'plugin:react-hooks/recommended',
    'plugin:astro/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['import', 'react', 'jest', 'sonarjs'],
  ignorePatterns: ['**/styled-system/*', '**/dist/*'],
  // rules: {
  //   'import/extensions': [ERROR, 'always', { ignorePackages: true }],
  //   'import/order': [
  //     WARN,
  //     {
  //       groups: [
  //         'builtin',
  //         ['external', 'internal'],
  //         'parent',
  //         ['sibling', 'index'],
  //       ],
  //     },
  //   ],
  //   'import/no-unresolved': [
  //     ERROR,
  //     {
  //       ignore: ['^@'],
  //     },
  //   ],
  //   'jest/no-standalone-expect': OFF,
  //   'react/jsx-uses-react': OFF,
  //   'react/prop-types': OFF,
  //   'react/react-in-jsx-scope': OFF,
  //   'sonarjs/no-duplicate-string': OFF,
  // },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
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
    'import/ignore': [
      'node_modules',
      '.json$',
      '.(scss|less|css|styl)$',
      'styled-system',
    ],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': 'node',
    react: {
      version: 'detect',
    },
  },
}
