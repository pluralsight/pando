export default {
  projects: [
    {
      displayName: 'react-aria',
      moduleDirectories: ['node_modules', `<rootDir>/react-aria`],
      moduleNameMapper: {
        '^test-utils$': `<rootDir>/test-utils.ts`,
      },
      testMatch: [`<rootDir>/react-aria/**/*.test.(ts|tsx)`],
    },
  ],

  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transformIgnorePatterns: ['node_modules'],
  testTimeout: 50000,
}
