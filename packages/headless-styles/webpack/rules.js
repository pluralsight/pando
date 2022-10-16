const esbuildLoader = 'esbuild-loader'
const esTarget = 'es2015'

const ts = {
  test: /\.ts$/,
  loader: esbuildLoader,
  options: {
    loader: 'ts',
    target: esTarget,
  },
}

const tsx = {
  test: /\.tsx$/,
  loader: esbuildLoader,
  options: {
    loader: 'tsx',
    target: esTarget,
  },
}

const js = {
  test: /\.js$/,
  loader: esbuildLoader,
  options: {
    loader: 'js',
    target: esTarget,
  },
}

const cssRegex = /\.css$/i
const styleLoader = 'style-loader'
const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      namedExport: true,
    },
    importLoaders: 1,
  },
}
const esbuildCSSLoader = {
  loader: 'esbuild-loader',
  options: {
    loader: 'css',
    minify: true,
  },
}
const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: ['autoprefixer'],
    },
  },
}

const cssDev = {
  test: cssRegex,
  use: [styleLoader, cssLoader, postCSSLoader],
}

const cssProd = {
  test: cssRegex,
  use: [styleLoader, cssLoader, esbuildCSSLoader],
}

const devBrowserRules = [ts, tsx, js, cssDev]
const prodBrowserRules = [ts, tsx, js, cssProd]

module.exports = {
  devBrowserRules,
  prodBrowserRules,
}
