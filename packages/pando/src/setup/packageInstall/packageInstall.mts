import { spawn } from 'bun'
import {
  packageInstallConfirmation,
  pandoInstallPrompt,
  reqdDependencyPrompt,
} from './prompts.mts'
import { fullPandoPackageName } from '../../shared/utils.mts'
import { pandoPkgs, reqdDepPkgs } from '../../shared/const.mts'
import { confirmProceed, denyProceed } from '../../shared/prompts.mts'

async function confirmAndInstall(script: string[], pkgs: string[]) {
  const okToProceed = await confirmProceed()

  if (!okToProceed) {
    console.log(denyProceed)
    throw new Error()
  }

  spawn(script.concat(pkgs))
}

export async function installPandoPackages(installScript: string[]) {
  const script = installScript.join(' ')
  console.log(pandoInstallPrompt)
  console.log(packageInstallConfirmation(script, pandoPkgs))

  return await confirmAndInstall(installScript, fullPandoPackageName(pandoPkgs))
}

export async function installReqdDependencyPackages(installScript: string[]) {
  const script = installScript.join(' ')
  console.log(reqdDependencyPrompt)
  console.log(packageInstallConfirmation(script, reqdDepPkgs))

  return await confirmAndInstall(installScript, reqdDepPkgs)
}
