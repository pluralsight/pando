import type { Tech } from '../types'
import type { AvatarOptions, Size, Sentiment } from './types'

export const defaultAvatarOptions = {
  label: '',
  sentiment: 'default' as Sentiment,
  size: 'm' as Size,
  src: '',
  tech: '' as Tech,
}

export const iconSizeMap: Record<Size, string> = {
  xs: '1.5rem',
  s: '2.5rem',
  m: '4rem',
  l: '6rem',
  xl: '8rem',
}

export function getDefaultAvatarOptions(options?: AvatarOptions) {
  return {
    label: options?.label ?? defaultAvatarOptions.label,
    sentiment: options?.sentiment ?? defaultAvatarOptions.sentiment,
    size: options?.size ?? defaultAvatarOptions.size,
    src: options?.src ?? defaultAvatarOptions.src,
    tech: options?.tech ?? defaultAvatarOptions.tech,
  }
}

export function createAvatarSelectorClasses(sentiment: Sentiment, size: Size) {
  return {
    labelClass: `${size}AvatarLabel`,
    sentimentClass: `${sentiment}Avatar`,
    sizeClass: `${size}Avatar`,
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

export function createAvatarProps(options: Required<AvatarOptions>) {
  const { label } = options
  const initials = displayInitials(createInitials(label))

  return {
    iconOptions: {
      ariaHidden: true,
      customSize: iconSizeMap[options.size],
      tech: options.tech,
    },
    wrapper: {},
    label: {
      'aria-label': label,
      value: initials,
    },
    image: {
      alt: label,
      src: options.src,
    },
  }
}
