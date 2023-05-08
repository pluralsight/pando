const channel =
  process.env.RELEASE_CHANNEL === 'experimental' ? 'experimental' : 'stable'

module.exports = {
  plugins: [],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
      },
    ],
    '@babel/preset-typescript',
  ],
  only: [`./index.${channel}.js`, './src/**/*'],
  ignore: ['**/*.d.ts'],
  minified: true,
  comments: false,
  sourceMaps: true,
  overrides: [
    {
      test: `./index.${channel}.js`,
    },
  ],
}
