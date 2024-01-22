import { Sentiment } from 'theme'
import { getSlotRecipePalettes } from './helpers'

export const SLOTS = ['root', 'container', 'featureIcon', 'main', 'closeRoot']
export const PALETTES = [
  'info',
  'success',
  'warning',
  'danger',
] satisfies Sentiment[]

export const toastPalettes = getSlotRecipePalettes(SLOTS, PALETTES)
