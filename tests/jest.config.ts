import { type Config } from 'jest'

const config: Config = {
  projects: [
    {
      displayName: 'react-aria',
      moduleDirectories: ['node_modules'],
      moduleNameMapper: {
        '^test-utils$': `<rootDir>/test-utils.ts`,
      },
      testEnvironment: 'jsdom',
      testMatch: [`<rootDir>/react-aria/**/*.test.(ts|tsx)`],
    },
  ],

  rootDir: './',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testTimeout: 50000,
}

export default config
