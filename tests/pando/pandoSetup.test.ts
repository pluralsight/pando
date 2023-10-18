import { describe, test, expect, afterAll } from 'bun:test'
import {
  DOWN,
  ENTER,
  denyInstallMessage,
  detectPackageManagerMessage,
  pause,
  readPackageJson,
  setup,
  undoPackageInstall,
} from './helpers'
import { pandoPkgs, reqdDepPkgs } from './mocks'

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

    const res = await new Response(stdout).text()
    expect(res).toInclude('Welcome to Pando setup')
  })
  test('can manually select bun', async () => {
    const { stdin, stdout } = setup('setup')
    stdin.write(ENTER)
    stdin.end()
    const res = await new Response(stdout).text()

    expect(res).toInclude(
      "we've determined that bun is your package manager! Great",
    )
  })
  test('can manually select pnpm', async () => {
    const { stdin, stdout } = setup('setup')
    stdin.write(DOWN)
    stdin.write(ENTER)
    stdin.end()
    const res = await new Response(stdout).text()

    expect(res).not.toInclude(
      "We've detected that your package manager is bun. Does that sound right?",
    )
    expect(res).toInclude(
      "we've determined that pnpm is your package manager! Great",
    )
  })
  test('can manually select yarn', async () => {
    const { stdin, stdout } = setup('setup')
    stdin.write(DOWN)
    stdin.write(DOWN)
    stdin.write(ENTER)
    stdin.end()
    const res = await new Response(stdout).text()

    expect(res).not.toInclude(detectPackageManagerMessage)
    expect(res).toInclude(
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
    const res = await new Response(stdout).text()

    expect(res).not.toInclude(detectPackageManagerMessage)
    expect(res).toInclude(
      "we've determined that npm is your package manager! Great",
    )
  })
})

describe('can deny package install', () => {
  afterAll(undoPackageInstall)
  test('can deny pando install', async () => {
    const { stdin, stdout } = setup('setup')
    stdin.write(ENTER)
    await pause(500)
    stdin.write('n')
    await pause(500)
    stdin.write(ENTER)
    stdin.end()
    const res = await new Response(stdout).text()
    const installedPackages = readPackageJson()

    pandoPkgs.forEach((pkg) => {
      expect(installedPackages).not.toInclude(pkg)
    })
    expect(res).toInclude(denyInstallMessage)
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
    const installedPackages = readPackageJson()

    reqdDepPkgs.forEach((pkg) => {
      expect(installedPackages).not.toInclude(pkg)
    })
    expect(res).toInclude(denyInstallMessage)
  })
})

describe('confirm package install', () => {
  afterAll(undoPackageInstall)
  test('installs pando packages', async () => {
    const { stdin, stdout } = setup('setup')
    stdin.write(ENTER)
    await pause(500)
    stdin.write(ENTER)
    stdin.end()
    const res = await new Response(stdout).text()
    const installedPackages = readPackageJson()

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
    const installedPackages = readPackageJson()

    reqdDepPkgs.forEach((pkg) => {
      expect(installedPackages).toInclude(pkg)
    })
  })
})
