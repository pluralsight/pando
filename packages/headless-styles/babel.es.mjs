const config = {
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
  only: ['./src/**/*'],
  ignore: ['**/*.d.ts'],
  comments: true,
  sourceMaps: true,
}

export default config
