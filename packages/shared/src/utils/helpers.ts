import type { Flag } from './types'

const isNetlifyDeploy =
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
