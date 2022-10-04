export const isNetlifyDeploy =
  // @ts-ignore-next-line this will fail in the CI bc we replace the vars
  Boolean(process.env.NETLIFY) && process.env.CONTEXT === 'deploy-preview'

// Public

export function warning(condition: boolean, message: string) {
  const __DEV__ = process.env.NODE_ENV !== 'production'

  if (__DEV__ && !condition) {
    console.error(message)
  }
}
