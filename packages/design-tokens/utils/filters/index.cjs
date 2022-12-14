function filterByTheme(token, theme) {
  if (token.path.includes(theme)) {
    return token
  }

  return null
}

module.exports = {
  filterByTheme,
}
