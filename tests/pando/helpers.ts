import { spawn, spawnSync } from 'bun'
import { relative, resolve } from 'path'
import {
  BUNLOCK,
  pandoPkgs,
  reqdDepPkgs,
  CLICommand,
} from '@pluralsight/pando/shared/const.ts'
import { readFileSync } from 'node:fs'

export function getPandoExe() {
  return relative(import.meta.dir, 'packages/pando')
}

export function setup(command?: CLICommand) {
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
  spawnSync(['git', 'checkout', resolve('../', BUNLOCK)], {
    cwd: getPandoExe(),
  })
  spawnSync(['bun', 'install'])
}

function getPandoPackageJson() {
  return resolve(getPandoExe(), 'package.json')
}

export function readPackageJson() {
  return readFileSync(getPandoPackageJson(), 'utf-8')
}

export const DOWN = '\x1B\x5B\x42'
export const UP = '\x1B\x5B\x41'
export const ENTER = '\x0D'
export const SPACE = '\x20'
