/**
 * @jest-environment jest-environment-node-single-context
 */
import { resolve } from 'node:path'
import { runSass } from 'sass-true'
import { globSync } from 'glob'

describe('Sass', () => {
  const testPath = `packages/headless-styles/tests/scss/*.test.scss`
  const testFiles = globSync(resolve(testPath))

  testFiles.forEach((file) => runSass({ describe, it }, file))
})
