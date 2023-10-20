import { spawn, spawnSync } from 'bun'
import { relative } from 'path'
import {
  BUNLOCK,
  pandoPkgs,
  reqdDepPkgs,
} from '@pluralsight/pando/shared/const.ts'
import { readFileSync } from 'fs'
import * as packageJson from '@pluralsight/pando/package.json'

export function getPandoExe() {
  return relative(import.meta.dir, 'packages/pando/src')
}

export function setup(command?: 'update' | 'setup') {
  const initialCmd = ['bun', 'run', 'index.mts']
  const cmd = command ? [...initialCmd, command] : [...initialCmd]
  return spawn({
    cmd,
    cwd: getPandoExe(),
    stdout: 'pipe',
    stderr: 'pipe',
    stdin: 'pipe',
  })
}

export function undoPackageInstall() {
  spawnSync(['bun', 'uninstall'].concat(pandoPkgs).concat(reqdDepPkgs), {
    cwd: getPandoExe(),
  })
  spawnSync(['git', 'checkout', `../../../${BUNLOCK}`], {
    cwd: getPandoExe(),
  })
  spawnSync(['bun', 'install'])
}

function getPandoPackageJson() {
  return relative(import.meta.dir, 'packages/pando/package.json')
}

export const DOWN = '\x1B\x5B\x42'
export const UP = '\x1B\x5B\x41'
export const ENTER = '\x0D'
export const SPACE = '\x20'
export const detectPackageManagerMessage =
  "We've detected that your package manager is"
export const denyInstallMessage =
  'No worries. You can always return to run the cli another time. Have a good day!'
