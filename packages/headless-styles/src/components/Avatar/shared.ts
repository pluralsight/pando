import { createPandoOptions } from '../shared/defaultOptions'
import type { IconOptions } from '../Icon/types'
import type {
  AvatarOptions,
  AvatarLabelOptions,
  AvatarSize,
  AvatarSentiment,
} from './types'

export function getDefaultAvatarOptions(options?: AvatarOptions) {
  return {
    classNames: options?.classNames ?? [],
    sentiment: options?.sentiment ?? 'default',
    size: options?.size ?? 'm',
  }
}

export const iconSizeMap: Record<AvatarSize, string> = {
  xs: '1.5rem',
  s: '2.5rem',
  m: '4rem',
  l: '6rem',
  xl: '8rem',
}

export function createAvatarSelectorClasses(
  sentiment: AvatarSentiment,
  size: AvatarSize
) {
  return {
    labelClass: `${size}AvatarLabel` as const,
    sentimentClass: `${sentiment}Avatar` as const,
    sizeClass: `${size}Avatar` as const,
  }
}

interface InitialsProps {
  word: string
  firstLetter: string
  lastLetter?: string
}

function createInitials(word: string): InitialsProps {
  const labelWords = word.split(' ')
  const firstWord = labelWords[0]

  return {
    word,
    firstLetter: formatLetter(firstWord),
    lastLetter: formatLetter(labelWords[1]),
  }
}

function formatLetter(word: string) {
  return word?.slice(0, 1) ?? ''
}

function displayInitials(initialsObj: InitialsProps) {
  const { firstLetter, lastLetter } = initialsObj

  if (lastLetter) {
    return `${firstLetter}${lastLetter}`
  }

  return firstLetter
}

export function createAvatarIconOptions(size: AvatarSize) {
  return {
    ...createPandoOptions<IconOptions>({
      ariaHidden: true,
      customSize: iconSizeMap[size],
    }),
  }
}

export function createAvatarLabalProps(options: AvatarLabelOptions) {
  const initials = displayInitials(createInitials(options.name ?? ''))

  return {
    'aria-label': options.name,
    value: initials,
  }
}
