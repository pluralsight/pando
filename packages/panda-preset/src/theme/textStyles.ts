import { defineTextStyles } from '@pandacss/dev'

const fontFamily = 'PS Commons'

// h1-h3
const displayWeight = {
  fontVariationSettings: '"wght" 800',
  fontWeight: '800',
}

// h4-h6
// const headingWeight = {
//   fontVariationSettings: '"wght" 700',
//   fontWeight: '700',
// }

// p
const bodyWeight = {
  fontVariationSettings: '"wght" 500',
  fontWeight: '500',
}

function createTextStyle(description: string, options: Record<string, string>) {
  return {
    description,
    value: {
      fontFamily,
      ...options,
    },
  }
}

export const textStyles = defineTextStyles({
  h1: {
    ...createTextStyle('The h1 text style - used in page titles', {
      fontSize: '3.5rem',
      lineHeight: '110%',
      ...displayWeight,
    }),
  },
  h2: {
    ...createTextStyle('The h2 text style - used in page titles', {
      fontSize: '5xl',
      lineHeight: '125%',
      ...displayWeight,
    }),
  },
  h3: {
    ...createTextStyle('The h3 text style - used in secondary titles', {
      fontSize: '2.5rem',
      lineHeight: '125%',
      ...displayWeight,
    }),
  },

  body: {
    ...createTextStyle('The body text style - used in paragraphs', {
      fontSize: 'md',
      lineHeight: '150%',
      ...bodyWeight,
    }),
  },
})
