import {
  type ChangeEvent,
  type FocusEvent,
  useCallback,
  useState,
  useMemo,
} from 'react'

export type Template = 'mm/dd/yyyy' | 'dd/mm/yyyy'
export type Blocks = number[]
export type Pattern = ['m', 'd', 'Y'] | ['d', 'm', 'Y']
export type PatternBlock = 'm' | 'd' | 'Y'

export interface AutoFormatOptions {
  pattern?: Pattern
  value?: string
}

const DELIMITER = '/'

export function useAutoFormatDate(options?: AutoFormatOptions) {
  const { pattern, value } = defaultAutoFormatOptions(options)
  const [formattedDate, setFormattedDate] = useState<string>(value)

  const blocks = useMemo(() => getBlocks(pattern), [pattern])

  const template = useMemo(
    () => getTemplate(pattern, blocks),
    [pattern, blocks]
  )

  const handleDateChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      return setFormattedDate((prev) => {
        const userInput = e.target.value
        const startingCursor = e.target.selectionStart ?? userInput.length

        const { formattedDate, cursorPosition } = formatDateInput({
          blocks,
          cursorPosition: startingCursor,
          pattern,
          value: userInput,
          prevValue: prev,
        })

        if (startingCursor !== userInput.length) {
          setCursorPosition(e.target, cursorPosition)
        }

        return formattedDate
      })
    },
    [blocks, pattern]
  )

  const handleDateBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      return setFormattedDate(
        (prev) =>
          formatDateInput({
            blocks,
            cursorPosition: e.target.value.length,
            pattern,
            prevValue: prev,
            value: e.target.value,
          }).formattedDate
      )
    },
    [blocks, pattern]
  )

  return useMemo(
    () => ({
      onBlur: handleDateBlur,
      onChange: handleDateChange,
      placeholder: template,
      maxLength: template.length,
      value: formattedDate,
    }),
    [handleDateBlur, handleDateChange, template, formattedDate]
  )
}

function defaultAutoFormatOptions(options?: AutoFormatOptions) {
  return {
    pattern: options?.pattern ?? ['m', 'd', 'Y'],
    value: options?.value ?? '',
  }
}

function setCursorPosition(element: HTMLInputElement, position: number) {
  requestAnimationFrame(() => element.setSelectionRange(position, position))
}

interface FormatOptions {
  blocks: Blocks
  cursorPosition: number
  pattern: Pattern
  prevValue: string
  value: string
}

function formatDateInput(options: FormatOptions) {
  const { blocks, cursorPosition, pattern, prevValue, value } = options
  const template = getTemplate(pattern, blocks)

  if (prevValue?.length > value.length) {
    return {
      formattedDate: value,
      cursorPosition,
    }
  }

  if (
    value.length > template.length ||
    getCharCount(DELIMITER, value) > pattern.length - 1
  ) {
    return {
      formattedDate: prevValue,
      cursorPosition: cursorPosition - (value.length - prevValue?.length),
    }
  }

  const chars = value.split('')
  let cursor = cursorPosition
  let currentBlock: PatternBlock = pattern[0]
  const dateParts = {
    d: '',
    m: '',
    Y: '',
  }

  for (let i = 0; i < chars.length && currentBlock !== null; i += 1) {
    if (chars[i] !== DELIMITER) {
      dateParts[currentBlock] += chars[i]
    }

    const formatted = formatDateBlock(
      currentBlock,
      dateParts[currentBlock],
      chars[i] === DELIMITER && cursorPosition > i
    )

    cursor += getCursorOffset(
      cursorPosition,
      i,
      formatted.length - dateParts[currentBlock].length
    )

    dateParts[currentBlock] = formatted

    const nextBlock = getNextBlock(currentBlock, pattern)
    if (
      dateParts[currentBlock].length ===
        blocks[pattern.indexOf(currentBlock)] ||
      (chars[i] === DELIMITER &&
        dateParts[currentBlock].length &&
        nextBlock !== null)
    ) {
      currentBlock = nextBlock
    }
  }

  if (Object.values(dateParts).join(DELIMITER).length === template.length) {
    dateParts.d = correctDayForMonth(
      strToInt(dateParts.d),
      strToInt(dateParts.m),
      strToInt(dateParts.Y)
    )
      .toString()
      .padStart(2, '0')
  }

  return {
    formattedDate: combineDateParts(dateParts, pattern),
    cursorPosition: cursor,
  }
}

function getCharCount(char: string, str: string) {
  return (str.match(new RegExp(char, 'g')) || []).length
}

function strToInt(value: string) {
  return parseInt(value, 10)
}

function getCursorOffset(cursor: number, index: number, value: number) {
  if (cursor > index) {
    return value
  }

  return 0
}

function getNextBlock(current: PatternBlock, pattern: Pattern) {
  return pattern[pattern.indexOf(current) + 1] ?? null
}

function formatDateBlock(
  blockId: PatternBlock,
  value: string,
  complete?: boolean
) {
  const cleanValue = getSanitizedNumericString(value)

  if (!cleanValue) {
    return cleanValue
  }

  switch (blockId) {
    case 'm':
      return formatMonth(cleanValue, complete)

    case 'd':
      return formatDay(cleanValue, complete)

    default:
      return cleanValue
  }
}

function formatDay(value: string, complete?: boolean) {
  const numericValue = parseInt(value, 10)

  if (value.length === 1) {
    if (complete || numericValue * 10 > 31) {
      return `0${Math.max(numericValue, 1)}`
    }
  } else {
    if (numericValue > 31) {
      return '31'
    } else if (numericValue < 1) {
      return '01'
    }
  }

  return value
}

function formatMonth(value: string, complete?: boolean) {
  const numericValue = parseInt(value, 10)

  if (value.length === 1) {
    if (complete || numericValue * 10 > 12) {
      return `0${Math.max(numericValue, 1)}`
    }
  } else {
    if (numericValue > 12) {
      return '12'
    } else if (numericValue < 1) {
      return '01'
    }
  }

  return value
}

function getSanitizedNumericString(value: string) {
  return value.replace(/[^0-9]/g, '')
}

function combineDateParts(
  dateParts: { d: string; m: string; Y: string },
  pattern: Pattern
) {
  const blocks = getBlocks(pattern)

  return pattern
    .map((block) => {
      const nextBlock = getNextBlock(block, pattern)
      const blockIdx = pattern.indexOf(block)
      const insertDelimiter =
        nextBlock &&
        (dateParts[nextBlock] || dateParts[block].length === blocks[blockIdx])

      if (insertDelimiter) {
        return dateParts[block] + DELIMITER
      } else {
        return dateParts[block]
      }
    })
    .join('')
}

function getBlocks(pattern: Pattern) {
  const blocks: Blocks = []

  pattern.forEach(function (value) {
    if (value === 'Y') {
      blocks.push(4)
    } else {
      blocks.push(2)
    }
  })

  return blocks
}

function getTemplate(pattern: Pattern, blocks: Blocks) {
  return pattern
    .map((letter, idx) => {
      const count = blocks[idx]
      return letter.repeat(count).toUpperCase()
    })
    .join('/')
}

function correctDayForMonth(day: number, month: number, year: number) {
  day = Math.min(day, 31)
  month = Math.min(month, 12)
  year = parseInt(String(year || 0), 10)

  if ((month < 7 && month % 2 === 0) || (month > 8 && month % 2 === 1)) {
    const leapDay = isLeapYear(year) ? 29 : 28
    return Math.min(day, month === 2 ? leapDay : 30)
  }

  return day
}

function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
