import type { Sentiment } from '../../theme/semantic-tokens/types'

export type RecipePalette<K extends Sentiment[]> = K[]

export function getSlotRecipePalettes<
  const S extends string,
  const P extends Sentiment,
>(
  slots: S[],
  palettes: P[],
  initialValue?: Record<P, Record<S, Record<'colorPalette', Sentiment>>>,
) {
  return palettes.reduce(
    (acc, palette) => {
      acc[palette] = slots.reduce(
        (acc, slot) => {
          acc[slot] = {
            colorPalette: palette,
          }
          return acc
        },
        {} as Record<S, Record<'colorPalette', Sentiment>>,
      )
      return acc
    },
    initialValue ??
      ({} as Record<P, Record<S, Record<'colorPalette', Sentiment>>>),
  )
}
