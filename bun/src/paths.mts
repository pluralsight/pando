import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'

export async function getWorkspaceRoot() {
  return await readdir(resolve('packages'))
}

export function getPackageRoot(packageName: string) {
  return resolve('packages', packageName)
}

export function getWorkspacePackageJson(packageName: string) {
  return import.meta.require(resolve('packages', packageName, 'package.json'))
}

export async function getPublicPackages() {
  const workspaces = (await getWorkspaceRoot()).filter((name) => {
    return !name.startsWith('node_modules')
  })

  return workspaces.filter((name) => {
    const pkg = import.meta.require(resolve('packages', name, 'package.json'))
    return pkg['private'] !== true
  })
}
