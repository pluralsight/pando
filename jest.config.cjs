module.exports = {
  projects: [
    {
      displayName: 'react-aria',
      extensionsToTreatAsEsm: ['.ts', '.tsx'],
      moduleDirectories: ['node_modules'],
      moduleNameMapper: {
        '^test-utils$': `<rootDir>/tests/test-utils.ts`,
      },
      testEnvironment: 'jsdom',
      testMatch: [`<rootDir>/tests/react-aria/**/*.test.(ts|tsx)`],
    },
    {
      displayName: 'react',
      extensionsToTreatAsEsm: ['.ts', '.tsx'],
      moduleDirectories: ['node_modules', '<rootDir>/tests/node_modules'],
      moduleNameMapper: {
        '^test-utils$': `<rootDir>/tests/test-utils.ts`,
        '^@/styled-system/(.*)$': `<rootDir>/sandbox/styled-system/$1`,
        '\\.(css|scss)$': 'identity-obj-proxy',
      },
      testEnvironment: 'jsdom',
      testMatch: [`<rootDir>/tests/react/**/*.test.(ts|tsx)`],
      transformIgnorePatterns: ['node_modules/(?!(@pluralsight/react/icons)/)'],
    },
    {
      displayName: 'sandbox',
      extensionsToTreatAsEsm: ['.ts', '.tsx'],
      moduleDirectories: ['node_modules', '<rootDir>/tests/node_modules'],
      moduleNameMapper: {
        '^test-utils$': `<rootDir>/tests/test-utils.ts`,
        '^@/(.*)$': `<rootDir>/sandbox/$1`,
        '^@/styled-system/(.*)$': `<rootDir>/sandbox/styled-system/$1`,
        '\\.(css|scss)$': 'identity-obj-proxy',
      },
      testEnvironment: 'jsdom',
      testMatch: [`<rootDir>/tests/sandbox/**/*.test.(ts|tsx)`],
      transformIgnorePatterns: ['@pluralsight/react/icons'],
    },
  ],

  rootDir: './',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.mjs?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testTimeout: 50000,
}
