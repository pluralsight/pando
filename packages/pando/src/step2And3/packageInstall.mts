import { installScripts, pandoPkgs, reqdDepPkgs } from 'shared/const.mts'
import { confirmProceed, denyProceed, stepMessages } from 'shared/prompts.mts'
import { PMOptions } from 'shared/types.mts'
import { spawn } from 'bun'

async function confirmAndInstall(
  installMsg: string,
  pm: string,
  pkgs: string[],
) {
  console.log(installMsg)
  console.log(`We will need to install these packages: ${pkgs.join(', ')}`)
  const okToProceed = await confirmProceed()
  if (!okToProceed) {
    console.log(denyProceed)
    throw new Error()
  }
  spawn(installScripts[pm].concat(pkgs))
}

export async function step2(pm: PMOptions) {
  return await confirmAndInstall(stepMessages.step2, pm, pandoPkgs)
}

export async function step3(pm: PMOptions) {
  await confirmAndInstall(stepMessages.step3, pm, reqdDepPkgs)
}
