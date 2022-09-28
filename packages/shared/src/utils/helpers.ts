import type { Flag } from './types'

const isNetlifyDeploy =
  // @ts-ignore-next-line this will fail in the CI bc we replace the vars
  Boolean(process.env.NETLIFY) && process.env.CONTEXT === 'deploy-preview'

function checkFlagAgainstChannel(flag: Flag) {
  return process.env.RELEASE_CHANNEL === flag
}

// Public

export function createFlag(flag: Flag) {
  if (isNetlifyDeploy) {
    return true
  }

  return checkFlagAgainstChannel(flag)
}

export function warning(condition: boolean, message: string) {
  if (!condition) {
    console.error(message)
  }
}
