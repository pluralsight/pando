import { step1 } from './step1/step1.mts'
import { step2, step3 } from './step2And3/packageInstall.mts'

export async function pandoSetup() {
  console.log('Welcome to Pando setup')
  let bunSpawnInstallScript: string[]

  try {
    bunSpawnInstallScript = await step1()
  } catch (_error) {
    return
  }

  try {
    await step2(bunSpawnInstallScript)
  } catch (_error) {
    return
  }

  try {
    await step3(bunSpawnInstallScript)
  } catch (_error) {
    return
  }
}
