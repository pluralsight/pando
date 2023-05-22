const config = {
  extends: './babel.es.mjs',
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

export default config
