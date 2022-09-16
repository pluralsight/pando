const isNetlifyDeploy =
  Boolean(process.env.NETLIFY) && process.env.CONTEXT === 'deploy-preview'

export function createFlag(callback: () => void) {
  if (isNetlifyDeploy) {
    return true
  }

  return callback()
}
