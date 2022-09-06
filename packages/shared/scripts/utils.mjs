import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { error } from './theme.mjs'

export function __dirname(metaURL) {
  return dirname(fileURLToPath(metaURL))
}

export function getWorkspacePath() {
  return resolve(__dirname(import.meta.url), '../src/')
}

export function warning(trueCondition, warningMessage) {
  if (!trueCondition) {
    console(error(warningMessage))
    process.exit(1)
  }
}
