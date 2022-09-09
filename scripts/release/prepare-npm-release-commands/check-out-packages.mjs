import { join, resolve } from 'node:path'
import { execSync } from 'child_process'
import { __dirname, execRead, getLocalPackagePath } from '../../utils.mjs'
import { error } from '../../theme.mjs'

async function checkoutPackages(packages, options) {
  packages.forEach(async (packageName) => {
    const packageDownloadName = `${packageName}_download`
    const downloadPath = resolve(__dirname(import.meta.url), '../../../')
    const localPackagePath = getLocalPackagePath(packageName)
    const filePath = join(downloadPath, `${packageDownloadName}.tgz`)
    const tempPackagePath = join(downloadPath, 'temp')

    // Yarn doesn't provide a way to download tarballs, so we have to use NPM
    const url = await execRead(
      `npm view @pluralsight/${packageName}@${options.version} dist.tarball`
    )

    try {
      // Download packages from NPM and extract them to the expected
      // build locations.
      execSync(`curl -L ${url} > ${filePath}`)
      execSync(`tar -xvzf ${filePath} -C ${tempPackagePath}`)
    } catch (err) {
      console.error(error(`Unable to download ${packageName} from NPM`))
      console.error(err)
    }

    try {
      execSync(`mv ${tempPackagePath} ${localPackagePath}`)
      execSync(`rm ${filePath}`)
    } catch (err) {
      console.error(
        error(
          `Unable to move ${packageName} from ${tempPackagePath} to ${localPackagePath}`
        )
      )
      console.error(err)
    }
  })
}

export default checkoutPackages
