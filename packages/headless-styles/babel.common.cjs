module.exports = {
  extends: './babel.es.cjs',
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
      },
    ],
    '@babel/preset-typescript',
  ],
}
