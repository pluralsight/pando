const vars = require('./utils/vars.cjs')
const dataFormats = require('./utils/formats/dataSources.cjs')

module.exports = {
  parsers: vars.parsers,
  source: vars.skillsSources,
  format: {
    tokenDataSources: dataFormats.cssPropAsValue,
    normalizeData: dataFormats.normalize,
  },
  platforms: {
    data: vars.data,
  },
}
