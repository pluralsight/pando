import { exec } from 'child-process-promise'
import { getLocalPackagePath } from '../../utils.mjs'
import { info, error } from '../../theme.mjs'

async function buildPackages(options) {
  const { packagesList } = options

  console.log(info`\n🛠  Building public packages locally...`)

  try {
    await packagesList.forEach(async (packageName) => {
      const cwd = getLocalPackagePath(packageName)
      await exec('bun run build', { cwd })
    })
  } catch (err) {
    console.error(error('Unable to build all packages.'))
    throw err
  }

  console.log(info('\n✅ Successfully built all packages.'))
}

export default buildPackages
