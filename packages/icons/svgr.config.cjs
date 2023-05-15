module.exports = {
  dimensions: false,
  index: false,
  icon: false,
  jsxRuntime: 'automatic',
  ref: false,
  plugins: ['@svgr/plugin-jsx'],
  svgo: false,
  template: require('./utils/reactTemplate.cjs'),
  typescript: true,
}
