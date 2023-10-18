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
import { appendFile, unlink, writeFile, writeFileSync } from 'fs'
import { relative, resolve } from 'node:path'
import { BUNLOCK, YARNLOCK, pandoPkgs, reqdDepPkgs } from './mocks'
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
  const path = import.meta.path
  console.log('path', path)
  afterAll(() => {
    console.log('AFTER')
    spawnSync(['bun', 'uninstall'].concat(pandoPkgs).concat(reqdDepPkgs), {
      cwd: getPandoExe(),
    })
    // spawnSync(['bun', 'install'], {
    //   cwd: getPandoExe(),
    // })
    // spawnSync(['git', 'checkout', path], {
    //   // cwd: '../',
    // })
  })
  test('installs pando packages', async () => {
    const { stdin, stdout } = setup('setup')
    stdin.write(ENTER)
    await pause(1000)
    stdin.write(ENTER)
    stdin.end()
    const text = await new Response(stdout).text()
    console.log('stdout', text)
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
