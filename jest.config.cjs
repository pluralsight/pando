const ROOT = '<rootDir>/packages'
const cssRegex = '^.+\\.s?css$'
const headlessStylesLocalProject = '@headless-styles'
const headlessStylesLocalPath = `${ROOT}/headless-styles/src/index.ts`
const reactLocalProject = '@react'
const reactLocalPath = `${ROOT}/react/src/index.ts`
const reactUtilsLocalProject = '@react-utils'
const reactUtilsLocalPath = `${ROOT}/react-utils/src/index.ts`
const sharedProject = '@pluralsight/shared'
const sharedPath = `${ROOT}/shared/src/index.ts`

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
      moduleDirectories: ['.', `${ROOT}/react/src`],
      moduleNameMapper: {
        [cssRegex]: 'identity-obj-proxy',
        [reactLocalProject]: reactLocalPath,
        [sharedProject]: sharedPath,
      },
      testEnvironment: 'jsdom',
      testMatch: [`${ROOT}/react/tests/**/*.test.(ts|tsx)`],
      transform: {
        '^.+\\.tsx?$': 'babel-jest',
      },
    },
    {
      displayName: 'react-utils',
      globals,
      moduleDirectories: ['.', `${ROOT}/react-utils/src`],
      moduleNameMapper: {
        [reactUtilsLocalProject]: reactUtilsLocalPath,
        [sharedProject]: sharedPath,
      },
      testEnvironment: 'jsdom',
      testMatch: [`${ROOT}/react-utils/tests/**/*.test.(ts|tsx)`],
      transform: {
        '^.+\\.tsx?$': 'babel-jest',
      },
    },
    {
      displayName: 'shared',
      globals,
      moduleDirectories: ['.', `${ROOT}/shared/src`],
      testMatch: [`${ROOT}/shared/tests/**/*.test.ts`],
    },
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transformIgnorePatterns: ['\\.pnp\\.[^\\/]+$'],
  testTimeout: 50000,
}
