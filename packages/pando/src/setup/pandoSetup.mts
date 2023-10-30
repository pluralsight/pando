import { pandoSetupWelcome } from '../shared/prompts.mts'
import { validatePackageManager } from './validatePackageManager/validatePackageManager.mts'
import { installPandoDeps, installRequiredDeps } from './install/helpers.mts'

export async function pandoSetup() {
  let bunSpawnInstallScript: string[] = []

  console.log(pandoSetupWelcome)

  try {
    bunSpawnInstallScript = await validatePackageManager()
    await installPandoDeps(bunSpawnInstallScript)
    await installRequiredDeps(bunSpawnInstallScript)
  } catch (error) {
    console.error(error)
    throw new Error('Pando setup failed')
  }
}
