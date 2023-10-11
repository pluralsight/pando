import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'

const PACKAGE_JSON = 'package.json'

export type Workspace = 'packages' | 'website'

export async function getWorkspaceRoot(workspace?: Workspace) {
  const name = workspace ? resolve(workspace) : resolve('packages')
  return await readdir(resolve(name))
}

export function getPackageRoot(packageName: string) {
  return resolve('packages', packageName)
}

export function getWorkspacePackageJson(packageName: string) {
  return import.meta.require(resolve('packages', packageName, PACKAGE_JSON))
}

export async function getPublicPackages() {
  const workspaces = (await getWorkspaceRoot()).filter((name) => {
    return !name.startsWith('node_modules')
  })

  return workspaces.filter((name) => {
    const pkg = import.meta.require(resolve('packages', name, PACKAGE_JSON))
    return pkg['private'] !== true
  })
}

// Sandbox

export function getSandboxRoot() {
  return resolve('sandbox')
}

// Website

export function getWebsiteRoot() {
  return resolve('website')
}

export async function getWebsitePackageJson() {
  return import.meta.require(resolve('website', PACKAGE_JSON))
}

// Scripts

export function getScriptsRoot() {
  return resolve('scripts')
}
