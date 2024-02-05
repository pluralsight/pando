import { exec } from 'child-process-promise'
import { getLocalPackagePath } from '../../utils.mjs'
import { info, error } from '../../theme.mjs'

async function buildPackages(options) {
  const { packagesList } = options
  const dependantPandoPackages = packagesList.filter(
    (packageName) => packageName !== 'icons',
  )

  console.log(info`\n🛠  Building Icons packages locally...`)

  try {
    const iconsCwd = getLocalPackagePath('icons')
    await exec('bun run build', { cwd: iconsCwd })
  } catch (error) {
    console.error(error('Unable to build icons package.'))
    throw error
  }

  console.log(info`\n🛠  Building public packages locally...`)

  try {
    await dependantPandoPackages.forEach(async (packageName) => {
      const cwd = getLocalPackagePath(packageName)
      await exec('bun run build', { cwd })
    })
  } catch (err) {
    console.error(error('Unable to build dependant packages.'))
    throw err
  }

  console.log(info('\n✅ Successfully built all packages.'))
}

export default buildPackages
