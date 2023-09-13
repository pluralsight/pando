export const fonts = {
  sans: { value: 'var(--font-pando)' },
  mono: { value: 'var(--font-pando-mono)' },
}

export const zIndex = {
  hide: { value: -1 },
  base: { value: 0 },

  // pseudo-elements, borders, etc.
  decorator: { value: 50 },

  // elements
  dropdown: { value: 1000 },
  sticky: { value: 1200 },
  banner: { value: 1300 },
  overlay: { value: 1400 },
  modal: { value: 1500 },
  popover: { value: 1600 },
  toast: { value: 1700 },
  tooltip: { value: 1800 },
}

export const tokens = {
  fonts,
  zIndex,
}
