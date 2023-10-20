import { afterAll, describe, expect, test } from 'bun:test'
import { ENTER, readPackageJson, setup, undoPackageInstall } from '../helpers'
import { pandoPkgs, reqdDepPkgs } from '@pluralsight/pando/shared/const.ts'
import { pause } from '@pluralsight/pando/shared/utils.ts'

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
