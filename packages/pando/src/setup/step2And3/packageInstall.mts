import { pandoPkgs, reqdDepPkgs } from 'shared/const.mts'
import { confirmProceed, denyProceed } from 'shared/prompts.mts'
import { spawn } from 'bun'
import { pkgInstallMsg, step2Msg, step3Msg } from './prompts.mts'

async function confirmAndInstall(script: string[], pkgs: string[]) {
  const okToProceed = await confirmProceed()

  if (!okToProceed) {
    console.log(denyProceed)
    throw new Error()
  }

  spawn(script.concat(pkgs))
}

export async function step2(installScript: string[]) {
  const script = installScript.join(' ')
  console.log(step2Msg)
  console.log(pkgInstallMsg(script, pandoPkgs))

  return await confirmAndInstall(installScript, pandoPkgs)
}

export async function step3(installScript: string[]) {
  const script = installScript.join(' ')
  console.log(step3Msg)
  console.log(pkgInstallMsg(script, reqdDepPkgs))

  return await confirmAndInstall(installScript, reqdDepPkgs)
}
