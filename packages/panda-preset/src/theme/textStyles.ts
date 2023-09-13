import { defineTextStyles } from '@pandacss/dev'

const fontFamily = 'PS Commons'

// h1-h3
const displayWeight = {
  fontVariationSettings: '"wght" 800',
  fontWeight: '800',
}

// h4-h6
const headingWeight = {
  fontVariationSettings: '"wght" 700',
  fontWeight: '700',
}

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
    ...createTextStyle('The h1 text style - used in page headings', {
      fontSize: '3.5rem',
      lineHeight: '110%',
      ...displayWeight,
    }),
  },
  h2: {
    ...createTextStyle('The h2 text style - used in page headings', {
      fontSize: '5xl',
      lineHeight: '125%',
      ...displayWeight,
    }),
  },
  h3: {
    ...createTextStyle('The h3 text style - used in secondary headings', {
      fontSize: '2.5rem',
      lineHeight: '125%',
      ...displayWeight,
    }),
  },
  h4: {
    ...createTextStyle('The h4 text style - used in secondary headings', {
      fontSize: '2rem',
      lineHeight: '125%',
      ...headingWeight,
    }),
  },
  h5: {
    ...createTextStyle(
      'The h5 text style - used in headings that are the lower emphasis',
      {
        fontSize: '2xl',
        lineHeight: '125%',
        ...headingWeight,
      },
    ),
  },
  h6: {
    ...createTextStyle(
      'The h6 text style - used in headings that are the lowest emphasis',
      {
        fontSize: 'lg',
        lineHeight: '150%',
        ...headingWeight,
      },
    ),
  },
  body: {
    ...createTextStyle('The body text style - used in paragraphs', {
      fontSize: 'md',
      lineHeight: '150%',
      ...bodyWeight,
    }),
  },
})
