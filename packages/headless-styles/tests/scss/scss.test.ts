/**
 * @jest-environment jest-environment-node-single-context
 */
import { resolve } from 'node:path'
import { runSass } from 'sass-true'
import { globSync } from 'glob'

describe('Sass', () => {
  const testPath = `packages/headless-styles/tests/scss/*.test.scss`

  console.log('Running Sass tests...', resolve(testPath))

  const testFiles = globSync(resolve(testPath))

  console.log(`Running ${testFiles.length} Sass tests...`)
  // Run on each file with describe() and it() functions
  testFiles.forEach((file) => runSass({ describe, it }, file))
})
