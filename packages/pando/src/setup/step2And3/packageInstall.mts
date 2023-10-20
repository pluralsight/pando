import { installScripts, pandoPkgs, reqdDepPkgs } from 'shared/const.mts'
import { confirmProceed, denyProceed } from 'shared/prompts.mts'
import { PMOptionsKeys } from 'shared/types.mts'
import { spawn } from 'bun'
import { pkgInstallMsg, step2Msg, step3Msg } from './prompts.mts'

async function confirmAndInstall(pm: string, pkgs: string[]) {
  const okToProceed = await confirmProceed()
  if (!okToProceed) {
    console.log(denyProceed)
    throw new Error()
  }
  spawn(installScripts[pm].concat(pkgs))
}

export async function step2(pm: PMOptionsKeys) {
  console.log(step2Msg)
  console.log(pkgInstallMsg(pandoPkgs))
  return await confirmAndInstall(pm, pandoPkgs)
}

export async function step3(pm: PMOptionsKeys) {
  console.log(step3Msg)
  console.log(pkgInstallMsg(reqdDepPkgs))
  await confirmAndInstall(pm, reqdDepPkgs)
}
