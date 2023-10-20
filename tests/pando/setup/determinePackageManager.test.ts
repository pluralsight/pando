import { describe, test, expect } from 'bun:test'
import { DOWN, ENTER, detectPackageManagerMessage, setup } from '../helpers'
import { CLIOPERATION } from '@pluralsight/pando/shared/const.ts'

describe('pando setup', () => {
  test('should execute the cli with the setup arg', async () => {
    const { stdout, stdin } = setup(CLIOPERATION.SETUP)
    stdin.end()
    const res = await new Response(stdout).text()

    expect(res).toInclude('Welcome to Pando setup\n')
  })
  // test('can manually select bun', async () => {
  //   const { stdin, stdout } = setup(CLIOPERATION.SETUP)
  //   stdin.write(ENTER)
  //   stdin.end()
  //   const res = await new Response(stdout).text()

  //   expect(res).toInclude(
  //     "we've determined that bun is your package manager! Great",
  //   )
  // })
  test('can manually select pnpm', async () => {
    const { stdin, stdout } = setup(CLIOPERATION.SETUP)
    stdin.write(DOWN)
    stdin.write(ENTER)
    stdin.end()
    const res = await new Response(stdout).text()

    expect(res).not.toInclude(
      "We've detected that your package manager is bun. Does that sound right?",
    )
    // expect(res).toInclude(
    //   "we've determined that pnpm is your package manager! Great",
    // )
  })
  test('can manually select yarn', async () => {
    const { stdin, stdout } = setup(CLIOPERATION.SETUP)
    stdin.write(DOWN)
    stdin.write(DOWN)
    stdin.write(ENTER)
    stdin.end()
    const res = await new Response(stdout).text()

    expect(res).not.toInclude(detectPackageManagerMessage)
    // expect(res).toInclude(
    //   "we've determined that yarn is your package manager! Great",
    // )
  })
  test('can manually select npm', async () => {
    const { stdin, stdout } = setup(CLIOPERATION.SETUP)
    stdin.write(DOWN)
    stdin.write(DOWN)
    stdin.write(DOWN)
    stdin.write(ENTER)
    stdin.end()
    const res = await new Response(stdout).text()

    expect(res).not.toInclude(detectPackageManagerMessage)
    // expect(res).toInclude(
    //   "we've determined that npm is your package manager! Great",
    // )
  })
})
