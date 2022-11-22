import { join, resolve } from 'node:path'
import { exec } from 'child-process-promise'
import { execRead, getRootPath, logPromise } from '../../utils.mjs'
import { error, info } from '../../theme.mjs'

async function run(packages, options) {
  const rootPath = getRootPath()
  const downloadPath = resolve(rootPath, 'temp')

  console.log(info('\nCleaning up old state if it still exists'))
  await exec('rm -rf temp', { cwd: rootPath })

  console.log(info(`\nCreating temp directory at ${rootPath}`))
  await exec('mkdir temp', { cwd: rootPath })

  await packages.forEach(async (packageName) => {
    const packageDownloadName = `${packageName}_download`
    const localPackagePath = join(rootPath, `packages/${packageName}`)
    const tarFile = join(downloadPath, `${packageDownloadName}.tgz`)
    const tempPackagePath = join(downloadPath, packageName)
    const cwd = downloadPath

    // Yarn doesn't provide a way to download tarballs, so we have to use NPM
    const url = await execRead(
      `npm view @pluralsight/${packageName}@${options.version} dist.tarball`
    )

    // Download packages from NPM
    try {
      console.log(info(`${packageName.toUpperCase()}:`))
      console.log(info(`\n📥  Downloading package: ${url}`))
      await exec(`curl -L ${url} > ${tarFile}`, { cwd })
      console.log(info(`\n📝  Creating dir for ${packageName} in ${cwd}`))
      await exec(`mkdir ${packageName}`, { cwd })
      console.log(
        info(
          `\n🗃️  Unzipping contents of ${tarFile} and copying to ${tempPackagePath}`
        )
      )
      await exec(`tar -xvzf ${tarFile} -C ./${packageName}`, {
        cwd,
      })
    } catch (err) {
      console.error(error(`\n❌  Unable to download ${packageName} from NPM`))
      console.error(err)
    }

    // Move files to local workspaces
    try {
      console.log(info(`\nMoving files to ${localPackagePath}`))
      await exec(`cp -rf ${tempPackagePath}/package/* ${localPackagePath}`)
    } catch (err) {
      console.error(
        error(
          `\n❌  Unable to move ${packageName} from ${tempPackagePath} to ${localPackagePath}`
        )
      )
      console.error(err)
    }
  })
}

export default async function checkoutPackages(packages, options) {
  await logPromise(
    run(packages, options),
    `Checking out "next" from NPM version - ${options.version}`
  )
}
