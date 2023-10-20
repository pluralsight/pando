import { afterAll, describe, expect, test } from 'bun:test'
import {
  ENTER,
  denyInstallMessage,
  readPackageJson,
  setup,
  undoPackageInstall,
} from '../helpers'
import {
  CLIOPERATION,
  pandoPkgs,
  reqdDepPkgs,
} from '@pluralsight/pando/shared/const.ts'
import { pause } from '@pluralsight/pando/shared/utils.ts'

describe('can deny package install', () => {
  afterAll(undoPackageInstall)
  test('can deny pando install', async () => {
    const { stdin, stdout } = setup(CLIOPERATION.SETUP)
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
    const { stdin, stdout } = setup(CLIOPERATION.SETUP)
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
