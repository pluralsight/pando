import { Sentiment } from 'theme'
import { getSlotRecipePalettes } from './helpers'

export const SLOTS = ['root', 'featureIcon', 'main', 'heading', 'description']

export const PALETTES = [
  'info',
  'success',
  'warning',
  'danger',
] satisfies Sentiment[]

export const admonitionPalettes = getSlotRecipePalettes(SLOTS, PALETTES)
