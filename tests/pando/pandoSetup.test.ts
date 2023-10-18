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
  getPandoPackageJson,
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

describe('can deny package install', () => {
  afterAll(() => {
    spawnSync(['bun', 'uninstall'].concat(pandoPkgs).concat(reqdDepPkgs), {
      cwd: getPandoExe(),
    })
    spawnSync(['git', 'checkout', `../../../${BUNLOCK}`], {
      cwd: getPandoExe(),
    })
    spawnSync(['bun', 'install'])
  })
  test('can deny pando install', async () => {
    const { stdin, stdout } = setup('setup')
    stdin.write(ENTER)
    await pause(500)
    stdin.write('n')
    await pause(500)
    stdin.write(ENTER)
    stdin.end()
    const res = await new Response(stdout).text()
    const installedPackages = readFileSync(getPandoPackageJson(), 'utf-8')
    pandoPkgs.forEach((pkg) => {
      expect(installedPackages).not.toInclude(pkg)
    })
    expect(res).toInclude(
      'No worries. You can always return to run the cli another time. Have a good day!',
    )
  })
  test('can deny required dependency install', async () => {
    const { stdin, stdout } = setup('setup')
    stdin.write(ENTER)
    await pause(500)
    stdin.write(ENTER)
    await pause(500)
    stdin.write('n')
    await pause(500)
    stdin.write(ENTER)
    stdin.end()
    const res = await new Response(stdout).text()
    const installedPackages = readFileSync(getPandoPackageJson(), 'utf-8')
    reqdDepPkgs.forEach((pkg) => {
      expect(installedPackages).not.toInclude(pkg)
    })
    expect(res).toInclude(
      'No worries. You can always return to run the cli another time. Have a good day!',
    )
  })
})

describe('confirm package install', () => {
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
    await pause(500)
    stdin.write(ENTER)
    stdin.end()
    const res = await new Response(stdout).text()
    const installedPackages = readFileSync(getPandoPackageJson(), 'utf-8')
    pandoPkgs.forEach((pkg) => {
      expect(installedPackages).toInclude(pkg)
    })
    expect(res).toInclude('Step 3: Install required dependencies')
  })
  test('installs required dependencies', async () => {
    const { stdin } = setup('setup')
    stdin.write(ENTER)
    await pause(500)
    stdin.write(ENTER)
    await pause(500)
    stdin.write(ENTER)
    await pause(500)
    stdin.end()
    const installedPackages = readFileSync(getPandoPackageJson(), 'utf-8')
    reqdDepPkgs.forEach((pkg) => {
      expect(installedPackages).toInclude(pkg)
    })
  })
})
