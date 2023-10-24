import { describe, test, expect } from 'bun:test'
import { ENTER, setup } from '../helpers'
import {
  CLIOPERATION,
  LOCKFILES,
  getInstallScript,
  pandoPkgs,
} from '@pluralsight/pando/shared/const.ts'
import { pkgInstallMsg } from '@pluralsight/pando/setup/step2And3/prompts.ts'
import { pause } from '@pluralsight/pando/shared/utils.ts'

describe('determine package manager', () => {
  test('can confirm that bun is detected', async () => {
    const { stdin, stdout } = setup(CLIOPERATION.SETUP)
    stdin.write(ENTER)
    stdin.end()
    const res = await new Response(stdout).text()
    const installScript = getInstallScript(LOCKFILES.BUNLOCK) as string[]
    const output = pkgInstallMsg(installScript.join(' '), pandoPkgs)

    expect(res).toInclude(output)
  })
  test('can input an install command', async () => {
    const cmd = 'a different command'
    const { stdin, stdout } = setup(CLIOPERATION.SETUP)
    stdin.write('n')
    await pause(500)
    stdin.write(ENTER)
    stdin.write(cmd)
    await pause(500)
    stdin.write(ENTER)
    stdin.end()
    const res = await new Response(stdout).text()

    expect(res).toInclude(cmd)
  })
})
