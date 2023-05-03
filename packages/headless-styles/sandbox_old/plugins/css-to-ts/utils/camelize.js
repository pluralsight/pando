const camelize = (str) => {
  if (str.startsWith('--')) {
    return str
  }

  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
}

export default camelize
