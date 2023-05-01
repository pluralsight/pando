const ROOT = '<rootDir>/packages'
const cssModuleRegex = '^.+\\.module\\.(css)$'
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
        [cssModuleRegex]: 'identity-obj-proxy',
        [sharedProject]: sharedPath,
      },
      testMatch: [`${ROOT}/headless-styles/tests/**/*.test.ts`],
      transformIgnorePatterns: [cssModuleRegex],
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
