export const avatarIconSizeMap = {
  xs: '1.5rem',
  sm: '2.5rem',
  md: '4rem',
  lg: '6rem',
  xl: '8rem',
}

export interface InitialsProps {
  word: string
  firstLetter: string
  lastLetter?: string
}

export function createInitials(word: string): InitialsProps {
  const labelWords = word.split(' ')
  const firstWord = labelWords[0]

  return {
    word,
    firstLetter: formatLetter(firstWord),
    lastLetter: formatLetter(labelWords[1]),
  }
}

export function formatLetter(word: string) {
  return word?.slice(0, 1) ?? ''
}

export function displayInitials(initialsObj: InitialsProps) {
  const { firstLetter, lastLetter } = initialsObj

  if (lastLetter) {
    return `${firstLetter}${lastLetter}`
  }

  return firstLetter
}
