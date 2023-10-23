import { step1 } from './step1/step1.mts'
import { step2, step3 } from './step2And3/packageInstall.mts'
import { PMOptions } from 'shared/types.mts'

export async function pandoSetup() {
  console.log('Welcome to Pando setup')
  let installScript: string

  try {
    installScript = await step1()
  } catch (_error) {
    return
  }

  try {
    await step2(installScript)
  } catch (_error) {
    return
  }

  try {
    await step3(installScript)
  } catch (_error) {
    return
  }
}
