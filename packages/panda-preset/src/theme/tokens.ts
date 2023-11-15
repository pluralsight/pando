export const fonts = {
  display: {
    description: 'Primary font reserved for display headings',
    value: 'var(--font-pando)',
  },
  sans: {
    description: 'Primary font used for body and headings',
    value: 'var(--font-pando)',
  },
  mono: {
    description: 'Code font used for any code related scenarios',
    value: 'var(--font-pando-mono)',
  },
  monoStrong: {
    description: 'Code font used for any code related scenarios',
    value: 'var(--font-pando-mono-strong)',
  },
}

export const zIndex = {
  hide: {
    description:
      'Used for when you need to hide elements in the layer stack',
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
      'Used for positioning overlay elements in the layer stack',
    value: 1400,
  },
  modal: {
    description:
      'Used for positioning modal elements in the layer stack',
    value: 1500,
  },
  popover: {
    description:
      'Used for positioning popover elements in the layer stack',
    value: 1600,
  },
  toast: {
    description:
      'Used for positioning toast elements in the layer stack',
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
