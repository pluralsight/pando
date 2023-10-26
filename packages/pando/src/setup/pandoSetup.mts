import { validatePackageManager } from './validatePackageManager/validatePackageManager.mts'
import {
  installPandoPackages,
  installReqdDependencyPackages,
} from './packageInstall/packageInstall.mts'

export async function pandoSetup() {
  console.log('Welcome to Pando setup')
  let bunSpawnInstallScript: string[]

  try {
    bunSpawnInstallScript = await validatePackageManager()
    await installPandoPackages(bunSpawnInstallScript)
    await installReqdDependencyPackages(bunSpawnInstallScript)
  } catch (_error) {
    return
  }
}
