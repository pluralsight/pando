// Public

export function warning(condition: boolean, message: string) {
  const __DEV__ = process.env.NODE_ENV !== 'production'

  if (__DEV__ && !condition) {
    console.error(message)
  }
}
