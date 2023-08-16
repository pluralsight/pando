const ROOT = '<rootDir>/packages'
const cssRegex = '^.+\\.s?css$'
const headlessStylesLocalProject = '@headless-styles'
const headlessStylesLocalPath = `${ROOT}/headless-styles/src/index.ts`
const reactLocalProject = '@react'
const reactLocalPath = `${ROOT}/react/src/index.ts`
const reactAriaLocalProject = '@react-aria'
const reactAriaLocalPath = `${ROOT}/react-aria/src/index.ts`
const reactUtilsLocalProject = '@react-utils'
const reactUtilsLocalPath = `${ROOT}/react-utils/src/index.ts`
const sharedProject = '@pluralsight/shared'
const sharedPath = `${ROOT}/shared/src/index.ts`

const reactProjectSettings = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
}

const globals = {
  __EXPERIMENTAL__: true,
}

module.exports = {
  projects: [
    {
      displayName: 'headless-styles',
      globals,
      moduleDirectories: ['.', `${ROOT}/headless-styles/src`],
      moduleNameMapper: {
        [cssRegex]: 'identity-obj-proxy',
        [headlessStylesLocalProject]: headlessStylesLocalPath,
        [sharedProject]: sharedPath,
      },
      testMatch: [`${ROOT}/headless-styles/tests/**/*.test.ts`],
      transformIgnorePatterns: [cssRegex],
    },
    {
      displayName: 'icons',
      testMatch: [`${ROOT}/icons/tests/**/*.test.(js|ts)`],
    },
    {
      displayName: 'react',
      globals,
      ...reactProjectSettings,
      moduleDirectories: ['.', `${ROOT}/react/src`],
      moduleNameMapper: {
        [cssRegex]: 'identity-obj-proxy',
        [reactLocalProject]: reactLocalPath,
        [sharedProject]: sharedPath,
      },
      testMatch: [`${ROOT}/react/tests/**/*.test.(ts|tsx)`],
    },
    {
      displayName: 'react-aria',
      globals,
      ...reactProjectSettings,
      moduleDirectories: ['.', `${ROOT}/react-aria/src`],
      moduleNameMapper: {
        [reactAriaLocalProject]: reactAriaLocalPath,
        [sharedProject]: sharedPath,
      },
      testMatch: [`${ROOT}/react-aria/tests/**/*.test.(ts|tsx)`],
    },
    {
      displayName: 'react-utils',
      globals,
      ...reactProjectSettings,
      moduleDirectories: ['.', `${ROOT}/react-utils/src`],
      moduleNameMapper: {
        [reactUtilsLocalProject]: reactUtilsLocalPath,
        [sharedProject]: sharedPath,
      },
      testMatch: [`${ROOT}/react-utils/tests/**/*.test.(ts|tsx)`],
    },
    {
      displayName: 'shared',
      globals,
      moduleDirectories: ['.', `${ROOT}/shared/src`],
      testMatch: [`${ROOT}/shared/tests/**/*.test.ts`],
    },
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transformIgnorePatterns: ['\\.pnp\\.[^\\/]+$'],
  testTimeout: 50000,
}
