import { afterAll, describe, expect, test } from 'bun:test'
import {
  ENTER,
  denyInstallMessage,
  pause,
  readPackageJson,
  setup,
  undoPackageInstall,
} from '../helpers'
import { pandoPkgs, reqdDepPkgs } from '../mocks'

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
