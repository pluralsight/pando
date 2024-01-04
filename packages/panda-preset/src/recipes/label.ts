import { defineRecipe } from '@pandacss/dev'

export const label = defineRecipe({
  className: 'label',
  description: 'The styles for the Label component',

  base: {
    alignItems: 'center',
    display: 'flex',
    fontSize: 'md',
    gap: '3',
    marginBottom: '0',
    marginInlineEnd: '0',
    opacity: '1',
    textAlign: 'start',
    userSelect: 'none',
  },

  variants: {
    usage: {
      hidden: {
        border: '0',
        clip: 'rect(0 0 0 0)',
        height: '1px',
        overflow: 'hidden',
        padding: '0',
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: '1px',
      },
    },
  },
})
