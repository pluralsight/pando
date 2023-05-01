// This only exist for Jest

module.exports = {
  plugins: [],
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
  ignore: ['**/*.d.ts'],
}
