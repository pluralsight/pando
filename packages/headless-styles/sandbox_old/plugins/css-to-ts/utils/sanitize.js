const sanitize = (name) =>
  sanitizeWhitespace(
    name
      .replace(/\*/g, 'all-children')
      .replace(/#/g, '$')
      .replace(/[^a-zA-Z0-9$]/g, '_')
      .replace(/^_+/g, '')
      .replace(/_+$/g, '')
  )

export default sanitize

export function sanitizeWhitespace(name) {
  return name.replace(/\s+/g, ' ').trim()
}
