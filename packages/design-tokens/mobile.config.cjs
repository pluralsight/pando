const vars = require('./utils/vars.cjs')

const baseFileConfig = vars.baseFileConfig

module.exports = {
  // parsers: vars.parsers,
  // source: vars.skillsSources,
  platforms: {
    //   android: {
    //     transformGroup: 'android',
    //     buildPath: 'build-mobile/android/',
    //     files: [
    //       {
    //         ...baseFileConfig,
    //         destination: 'colors.xml',
    //         format: 'android/colors',
    //       },
    //     ],
    //   },
    // compose: {
    //   transformGroup: 'compose',
    //   buildPath: 'build-mobile/compose/',
    //   files: [
    //     {
    //       ...baseFileConfig,
    //       destination: 'StyleDictionaryColor.kt',
    //       format: 'compose/object',
    //       className: 'StyleDictionaryColor',
    //       packageName: 'com.pluralsight.android.learner',
    //       filter: {
    //         attributes: {
    //           category: 'color',
    //         },
    //       },
    //     },
    //   ],
    // },
    ios: {
      transformGroup: 'ios',
      buildPath: 'build-mobile/ios/',
      files: [
        {
          ...baseFileConfig,
          destination: 'StyleDictionaryColor.h',
          format: 'ios/colors.h',
          className: 'StyleDictionaryColor',
          type: 'StyleDictionaryColorName',
        },
        {
          ...baseFileConfig,
          destination: 'StyleDictionaryColor.m',
          format: 'ios/colors.m',
          className: 'StyleDictionaryColor',
          type: 'StyleDictionaryColorName',
        },
      ],
    },
    'ios-swift': {
      transformGroup: 'ios-swift',
      buildPath: 'build-mobile/ios-swift/',
      files: [
        {
          ...baseFileConfig,
          destination: 'StyleDictionary.swift',
          format: 'ios-swift/class.swift',
          className: 'StyleDictionary',
        },
      ],
    },
    'ios-swift-separate-enums': {
      transformGroup: 'ios-swift-separate',
      buildPath: 'build-mobile/ios-swift/',
      files: [
        {
          ...baseFileConfig,
          destination: 'StyleDictionaryColor.swift',
          format: 'ios-swift/enum.swift',
          className: 'StyleDictionaryColor',
        },
      ],
    },
  },
}
