module.exports = {
  projects: [
    {
      displayName: 'react-aria',
      moduleDirectories: ['node_modules'],
      moduleNameMapper: {
        '^test-utils$': `<rootDir>/tests/test-utils.ts`,
      },
      testEnvironment: 'jsdom',
      testMatch: [`<rootDir>/tests/react-aria/**/*.test.(ts|tsx)`],
    },
  ],

  rootDir: './',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testTimeout: 50000,
}
