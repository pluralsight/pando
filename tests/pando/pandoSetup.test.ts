import {
  describe,
  test,
  expect,
  beforeAll,
  afterAll,
  beforeEach,
  afterEach,
} from 'bun:test'
import {
  DOWN,
  ENTER,
  detectPackageManagerMessage,
  getPandoExe,
  pause,
  setup,
} from './helpers'
import { readFileSync } from 'fs'
import { relative, resolve } from 'node:path'
import { BUN, BUNLOCK, YARNLOCK, pandoPkgs, reqdDepPkgs } from './mocks'
import { spawnSync } from 'bun'

describe('pando setup', () => {
  test('should execute the cli with the setup arg', async () => {
    const { stdout, stdin } = setup('setup')
    stdin.end()
    const res = await new Response(stdout).text()
    expect(res).toInclude('Welcome to Pando setup\n')
  })
  test('should initiate pandoSetup when selected', async () => {
    const { stdin, stdout } = setup()
    stdin.write(ENTER)
    stdin.end()

    const text = await new Response(stdout).text()
    expect(text).toInclude('Welcome to Pando setup')
  })
  test('can manually select bun', async () => {
    const { stdin, stdout } = setup('setup')
    stdin.write(ENTER)
    stdin.end()

    const text = await new Response(stdout).text()
    expect(text).toInclude(
      "we've determined that bun is your package manager! Great",
    )
  })
  test('can manually select pnpm', async () => {
    const { stdin, stdout } = setup('setup')
    stdin.write(DOWN)
    stdin.write(ENTER)
    stdin.end()

    const text = await new Response(stdout).text()
    expect(text).not.toInclude(
      "We've detected that your package manager is bun. Does that sound right?",
    )
    expect(text).toInclude(
      "we've determined that pnpm is your package manager! Great",
    )
  })
  test('can manually select yarn', async () => {
    const { stdin, stdout } = setup('setup')
    stdin.write(DOWN)
    stdin.write(DOWN)
    stdin.write(ENTER)
    stdin.end()

    const text = await new Response(stdout).text()
    expect(text).not.toInclude(detectPackageManagerMessage)
    expect(text).toInclude(
      "we've determined that yarn is your package manager! Great",
    )
  })
  test('can manually select npm', async () => {
    const { stdin, stdout } = setup('setup')
    stdin.write(DOWN)
    stdin.write(DOWN)
    stdin.write(DOWN)
    stdin.write(ENTER)
    stdin.end()

    const text = await new Response(stdout).text()
    expect(text).not.toInclude(detectPackageManagerMessage)
    expect(text).toInclude(
      "we've determined that npm is your package manager! Great",
    )
  })
})

describe('package install', () => {
  afterAll(() => {
    spawnSync(['bun', 'uninstall'].concat(pandoPkgs).concat(reqdDepPkgs), {
      cwd: getPandoExe(),
    })
    spawnSync(['git', 'checkout', `../../../${BUNLOCK}`], {
      cwd: getPandoExe(),
    })
    spawnSync(['bun', 'install'])
  })
  test('installs pando packages', async () => {
    const { stdin, stdout } = setup('setup')
    stdin.write(ENTER)
    await pause(1000)
    stdin.write(ENTER)
    stdin.end()
    const res = await new Response(stdout).text()
    const packageJson = relative(import.meta.dir, 'packages/pando/package.json')
    const installedPackages = readFileSync(packageJson, 'utf-8')
    expect(installedPackages).toInclude('@pluralsight/icons')
    expect(installedPackages).toInclude('@pluralsight/panda-preset')
    expect(installedPackages).toInclude('@pluralsight/react')
    expect(res).toInclude('Step 3: Install required dependencies')
  })
  test('installs required dependencies', async () => {
    const { stdin } = setup('setup')
    stdin.write(ENTER)
    await pause(1000)
    stdin.write(ENTER)
    await pause(1000)
    stdin.write(ENTER)
    stdin.end()
    const packageJson = relative(import.meta.dir, 'packages/pando/package.json')
    const installedPackages = readFileSync(packageJson, 'utf-8')
    expect(installedPackages).toInclude('@pandacss/dev')
    expect(installedPackages).toInclude('postcss')
    expect(installedPackages).toInclude('autoprefixer')
  })
})

// describe('pando setup with bun', () => {
//   const path = relative(import.meta.path, BUNLOCK)
//   beforeEach(() => {
//     console.log('PATH', path)
//     appendFile(path, 'bun.lockb', () => null)
//   })
//   // afterAll(() => {
//   //   unlink(path, () => {
//   //     console.log('deleted!')
//   //   })
//   // })
//   test('setup with bun', async () => {
//     appendFile(path, 'bun.lockb', () => null)
//     const { stdin, stdout } = setup('setup')
//     stdin.write(ENTER)
//     stdin.end()
//     const text = await new Response(stdout).text()
//     console.log('text', text)
//   })
// })
