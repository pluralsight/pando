import type { Flag } from './types'

const isNetlifyDeploy =
  Boolean(process.env.NETLIFY) && process.env.CONTEXT === 'deploy-preview'

function checkFlag(flag: Flag) {
  return process.env.RELEASE_CHANNEL === flag ?? false
}

// Public

export function createFlag(flag: Flag) {
  if (isNetlifyDeploy) {
    return true
  }

  return checkFlag(flag)
}
