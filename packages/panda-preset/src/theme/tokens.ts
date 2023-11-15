export const fonts = {
  display: {
    description: 'Primary font reserved for display headings',
    value: 'var(--font-pando)',
  },
  sans: {
    description: 'Primary font - used for all text styles except code samples',
    value: 'var(--font-pando)',
  },
  mono: {
    description: 'Code font - used for code samples and syntax',
    value: 'var(--font-pando-mono)',
  },
  monoStrong: {
    description: 'Code font - used for code samples and syntax',
    value: 'var(--font-pando-mono-strong)',
  },
}

export const zIndex = {
  hide: {
    description:
      'z-index value - used to hide an element and its children by stacking it below others',
    value: -1,
  },
  base: { description: 'z-index default value', value: 0 },

  // pseudo-elements, borders, etc.
  decorator: {
    description: 'z-index value - used to position pseudo-elements and borders',
    value: 50,
  },

  // elements
  dropdown: {
    description:
      'z-index value - used to set the z-order of dropdown elements and their children to stack above or below other elements according to their z-index value',
    value: 1000,
  },
  sticky: {
    description:
      'z-index value - used to set the z-order for elements that stick to their nearest scrolling ancestor.',
    value: 1200,
  },
  banner: {
    description:
      'z-index value - used to set the z-order of banner elements and their children to stack above or below other elements according to their z-index value',
    value: 1300,
  },
  overlay: {
    description:
      'z-index value - used to set the z-order of overlay elements and their children to stack above or below other elements according to their z-index value',
    value: 1400,
  },
  modal: {
    description:
      'z-index value - used to set the z-order of modal elements and their children to stack above or below other elements according to their z-index value',
    value: 1500,
  },
  popover: {
    description:
      'z-index value - used to set the z-order of popover elements and their children to stack above or below other elements according to their z-index value',
    value: 1600,
  },
  toast: {
    description:
      'z-index value - used to set the z-order of toast elements and their children to stack above or below other elements according to their z-index value',
    value: 1700,
  },
  tooltip: {
    description:
      'z-index value - used to set the z-order of tooltip elements and their children to stack above or below other elements according to their z-index value',
    value: 1800,
  },
}

export const tokens = {
  fonts,
  zIndex,
}
