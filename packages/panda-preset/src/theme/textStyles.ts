import { defineTextStyles } from '@pandacss/dev'

// display titles
const displayStyles = {
  fontFamily: 'display',
  fontVariationSettings: '"wght" 800',
  lineHeight: '110%',
}

// h1-h6
const headingWeight = {
  fontVariationSettings: '"wght" 600',
}

// mono
const monoStyles = {
  fontFamily: 'mono',
  fontVariationSettings: '"wght" 400',
}

function createTextStyle(description: string, options: Record<string, string>) {
  return {
    description,
    value: {
      fontFamily: 'sans',
      ...options,
    },
  }
}

export const textStyles = defineTextStyles({
  'display-sm': {
    ...createTextStyle('The h1 text style - used for small display text', {
      fontSize: '3.5rem',
      ...displayStyles,
    }),
  },
  'display-md': {
    ...createTextStyle('The h1 text style - used for medium display text', {
      fontSize: '4.5rem',
      ...displayStyles,
    }),
  },
  'display-lg': {
    ...createTextStyle('The h1 text style - used for large display text', {
      fontSize: '5.5rem',
      ...displayStyles,
    }),
  },

  // headings

  h1: {
    ...createTextStyle('The h1 text style - used in page headings', {
      fontSize: '2.5rem',
      lineHeight: '110%',
      ...headingWeight,
    }),
  },
  h2: {
    ...createTextStyle('The h2 text style - used in page headings', {
      fontSize: '2rem',
      lineHeight: '125%',
      ...headingWeight,
    }),
  },
  h3: {
    ...createTextStyle('The h3 text style - used in secondary headings', {
      fontSize: '1.5rem',
      lineHeight: '125%',
      ...headingWeight,
    }),
  },
  h4: {
    ...createTextStyle('The h4 text style - used in secondary headings', {
      fontSize: '1.125rem',
      lineHeight: '125%',
      ...headingWeight,
    }),
  },
  h5: {
    ...createTextStyle(
      'The h5 text style - used in headings that are the lower emphasis',
      {
        fontSize: '1rem',
        ...headingWeight,
      },
    ),
  },
  h6: {
    ...createTextStyle(
      'The h6 text style - used in headings that are the lowest emphasis',
      {
        fontSize: '0.875rem',
        ...headingWeight,
      },
    ),
  },

  // body text - inherits mostly from the html element in globalCSS.ts

  'body-xs': {
    ...createTextStyle(
      'The small text style - used in support text or legal.',
      {
        fontSize: '0.75rem',
      },
    ),
  },
  'body-s': {
    ...createTextStyle(
      'The small text style - used in support text or legal.',
      {
        fontSize: '0.875rem',
      },
    ),
  },
  'body-m': {
    ...createTextStyle('The body text style - used in paragraphs', {
      fontSize: '1rem',
    }),
  },
  'body-l': {
    ...createTextStyle(
      'The body text style - used in paragraphs as smallest headings',
      {
        fontSize: '1.125rem',
      },
    ),
  },
  'body-xl': {
    ...createTextStyle(
      'The body text style - used in paragraphs as smaller headings',
      {
        fontSize: '1.25rem',
      },
    ),
  },
  'body-2xl': {
    ...createTextStyle(
      'The body text style - used in paragraphs as small headings',
      {
        fontSize: '1.5rem',
      },
    ),
  },

  // mono

  'mono-xs': {
    ...createTextStyle('The mono text style - used in smallest code blocks', {
      fontSize: '0.75rem',
      ...monoStyles,
    }),
  },
  'mono-sm': {
    ...createTextStyle('The mono text style - used in small code blocks', {
      fontSize: '0.875rem',
      ...monoStyles,
    }),
  },
  'mono-md': {
    ...createTextStyle('The mono text style - used in normal code blocks', {
      fontSize: '1rem',
      ...monoStyles,
    }),
  },
  'mono-lg': {
    ...createTextStyle('The mono text style - used in large code blocks', {
      fontSize: '1.125rem',
      ...monoStyles,
    }),
  },
})
