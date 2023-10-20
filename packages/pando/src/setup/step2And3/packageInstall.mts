import { installScripts, pandoPkgs, reqdDepPkgs } from 'shared/const.mts'
import { confirmProceed, denyProceed, stepMessages } from 'shared/prompts.mts'
import { PMOptions } from 'shared/types.mts'
import { spawn } from 'bun'
import { packageList } from './prompts.mts'

async function confirmAndInstall(pm: string, pkgs: string[]) {
  const okToProceed = await confirmProceed()
  if (!okToProceed) {
    console.log(denyProceed)
    throw new Error()
  }
  spawn(installScripts[pm].concat(pkgs))
}

export async function step2(pm: PMOptions) {
  console.log(stepMessages.step2)
  console.log(packageList(pandoPkgs))
  return await confirmAndInstall(pm, pandoPkgs)
}

export async function step3(pm: PMOptions) {
  console.log(stepMessages.step3)
  console.log(packageList(reqdDepPkgs))
  await confirmAndInstall(pm, reqdDepPkgs)
}
