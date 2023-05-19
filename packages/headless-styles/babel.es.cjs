const channel =
  process.env.RELEASE_CHANNEL === 'experimental' ? 'experimental' : 'stable'

module.exports = {
  plugins: [
    [
      'transform-rename-import',
      { original: '^(.+?)\\.scss$', replacement: '$1.css' },
    ],
  ],
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
  comments: false,
  sourceMaps: true,
  overrides: [
    {
      test: `./index.${channel}.js`,
    },
  ],
}
