import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  html: {
    backgroundColor: 'var(--pando-colors-neutral-surface)',
    color: 'var(--pando-colors-neutral-text)',
    fontFamily: 'var(--pando-fonts-sans)',
    fontFeatureSettings: "'tnum' on, 'lnum' on",
    fontSize: '1em',
    fontVariationSettings: "'wght' 500",
    lineHeight: '150%',
    textRendering: 'geometricprecision',
    textSizeAdjust: '100%',
  },

  body: {
    fontSize: '1rem',
  },

  'body::-webkit-scrollbar': {
    width: '0.5em',
  },

  'body::-webkit-scrollbar-track': {
    backgroundColor: 'var(--pando-colors-neutral-border-weak)',
    outline: 'none',
  },

  'body::-webkit-scrollbar-thumb': {
    backgroundColor: 'var(--pando-colors-neutral-border)',
    borderRadius: '5px',
    outline: 'none',
  },

  "body[data-modal-open='true']": {
    marginLeft: '0',
    marginRight: '0',
    marginTop: '0',
    overflow: 'hidden',
    overscrollBehavior: 'contain',
    paddingInlineStart: '0',
    paddingInlineEnd: '0.5em',
    paddingTop: '0',
    position: 'relative',
  },

  strong: {
    fontVariationSettings: "'wght' 700",
  },

  // images

  img: {
    maxWidth: '100%',
    verticalAlign: 'middle',
  },
  'img[width]': {
    maxWidth: 'none',
  },
  'img[height]': {
    maxWidth: 'none',
  },
})
