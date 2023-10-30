import { spawn } from 'bun'
import { fullPandoPackageName } from '../../shared/utils.mts'
import { pandoDeps, reqDeps } from '../../shared/const.mts'
import { confirmProceed, denyProceed } from '../../shared/prompts.mts'
import {
  packageInstallConfirmation,
  pandoInstallPrompt,
  reqdDependencyPrompt,
} from './prompts.mts'

async function confirmAndInstall(script: string[], pkgs: string[]) {
  const okToProceed = await confirmProceed()

  if (!okToProceed) {
    console.log(denyProceed)
    throw new Error()
  }

  spawn(script.concat(pkgs))
}

export async function installPandoDeps(installScript: string[]) {
  const script = installScript.join(' ')
  console.log(pandoInstallPrompt)
  console.log(packageInstallConfirmation(script, pandoDeps))

  return await confirmAndInstall(installScript, fullPandoPackageName(pandoDeps))
}

export async function installRequiredDeps(installScript: string[]) {
  const script = installScript.join(' ')
  console.log(reqdDependencyPrompt)
  console.log(packageInstallConfirmation(script, reqDeps))

  return await confirmAndInstall(installScript, reqDeps)
}
