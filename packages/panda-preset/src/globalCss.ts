import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  html: {
    backgroundColor: 'var(--ps-neutral-surface)',
    color: 'var(--ps-neutral-text)',
    fontFamily:
      "'PS Commons', 'Gotham SSm A', 'Gotham SSm B', Arial, sans-serif",
    fontFeatureSettings: "'tnum' on, 'lnum' on",
    fontSize: '1em',
    fontVariationSettings: "'wght' 500",
    lineHeight: '1.5',
    textRendering: 'geometricprecision',
    textSizeAdjust: '100%',
  },

  'body::-webkit-scrollbar': {
    width: '0.5em',
  },

  'body::-webkit-scrollbar-track': {
    backgroundColor: 'var(--ps-neutral-border-weak)',
    outline: 'none',
  },

  'body::-webkit-scrollbar-thumb': {
    backgroundColor: 'var(--ps-border)',
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
