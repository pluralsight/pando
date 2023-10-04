const ROOT = '<rootDir>/packages'
const cssRegex = '^.+\\.s?css$'

function createProjectSettings(workspace) {
  return {
    localProject: `@${workspace}`,
    localPath: `${ROOT}/${workspace}/src/index.ts`,
  }
}

const hs = createProjectSettings('headless-styles')
const react = createProjectSettings('react')
const reactAria = createProjectSettings('react-aria')
const reactUtils = createProjectSettings('@react-utils')
const pando = createProjectSettings('pando')
const pandaPreset = createProjectSettings('panda-preset')
const shared = createProjectSettings('shared')

const reactProjectSettings = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
}

const globals = {
  __EXPERIMENTAL__: true,
}

const defaultModuleDirectories = ['node_modules', '<rootDir>']

module.exports = {
  projects: [
    {
      displayName: 'headless-styles',
      globals,
      moduleDirectories: [
        ...defaultModuleDirectories,
        `${ROOT}/headless-styles/src`,
      ],
      moduleNameMapper: {
        [cssRegex]: 'identity-obj-proxy',
        [hs.localProject]: hs.localPath,
        [shared.localProject]: shared.localPath,
      },
      testMatch: [`${ROOT}/headless-styles/tests/**/*.test.ts`],
      transformIgnorePatterns: [cssRegex],
    },
    {
      displayName: 'icons',
      testMatch: [`${ROOT}/icons/tests/**/*.test.(js|ts)`],
    },
    {
      displayName: 'panda-preset',
      globals,
      moduleDirectories: [
        ...defaultModuleDirectories,
        `${ROOT}/panda-preset/src`,
      ],
      moduleNameMapper: {
        [pandaPreset.localProject]: pandaPreset.localPath,
      },
      testMatch: [`${ROOT}/panda-preset/tests/**/*.test.ts`],
    },
    {
      displayName: 'pando',
      globals,
      moduleDirectories: [...defaultModuleDirectories, `${ROOT}/pando/src`],
      moduleNameMapper: {
        [pando.localProject]: pando.localPath,
      },
      testMatch: [`${ROOT}/pando/tests/**/*.test.ts`],
    },
    {
      displayName: 'react',
      globals,
      ...reactProjectSettings,
      moduleDirectories: [...defaultModuleDirectories, `${ROOT}/react/src`],
      moduleNameMapper: {
        [cssRegex]: 'identity-obj-proxy',
        [react.localProject]: react.localPath,
        [shared.localProject]: shared.localPath,
        '^test-utils$': `${ROOT}/react/tests/test-utils.ts`,
      },
      testMatch: [`${ROOT}/react/tests/**/*.test.(ts|tsx)`],
    },
    {
      displayName: 'react-aria',
      globals,
      ...reactProjectSettings,
      moduleDirectories: [
        ...defaultModuleDirectories,
        `${ROOT}/react-aria/src`,
      ],
      moduleNameMapper: {
        [reactAria.localProject]: reactAria.localPath,
        [shared.localProject]: shared.localPath,
        '^test-utils$': `${ROOT}/react/tests/test-utils.ts`,
      },
      testMatch: [`${ROOT}/react-aria/tests/**/*.test.(ts|tsx)`],
    },
    {
      displayName: 'react-utils',
      globals,
      ...reactProjectSettings,
      moduleDirectories: [
        ...defaultModuleDirectories,
        `${ROOT}/react-utils/src`,
      ],
      moduleNameMapper: {
        [reactUtils.localProject]: reactUtils.localPath,
        [shared.localProject]: shared.localPath,
        '^test-utils$': `${ROOT}/react/tests/test-utils.ts`,
      },
      testMatch: [`${ROOT}/react-utils/tests/**/*.test.(ts|tsx)`],
    },
    {
      displayName: 'shared',
      globals,
      moduleDirectories: [...defaultModuleDirectories, `${ROOT}/shared/src`],
      testMatch: [`${ROOT}/shared/tests/**/*.test.ts`],
    },
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transformIgnorePatterns: ['node_modules'],
  testTimeout: 50000,
}
