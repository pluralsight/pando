import type { AvatarSize } from '@headless-styles/types.ts'

export const sizes: AvatarSize[] = ['xs', 's', 'm', 'l', 'xl']

export const label = {
  xs: 'xtra small',
  s: 'small',
  m: 'medium',
  l: 'large',
  xl: 'xtra large',
}

export const data = {
  items: sizes,
  results: {
    xs: {
      key: sizes[0],
      name: label.xs,
      src: 'https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=30&h=30&q=80',
      size: sizes[0],
    },
    s: {
      key: sizes[1],
      name: label.s,
      src: 'https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=48&h=48&q=80',
      size: sizes[1],
    },
    m: {
      key: sizes[2],
      name: label.m,
      src: 'https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=64&h=64&q=80',
      size: sizes[2],
    },
    l: {
      key: sizes[3],
      name: label.l,
      src: 'https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=96&h=96&q=80',
      size: sizes[3],
    },
    xl: {
      key: sizes[4],
      name: label.xl,
      src: 'https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=128&h=128&q=80',
      size: sizes[4],
    },
  },
}
