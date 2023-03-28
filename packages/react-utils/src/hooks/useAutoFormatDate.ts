import { type ChangeEvent, useCallback, useState, useMemo } from 'react'

// based on the Cleave Date API
// https://github.com/nosir/cleave.js/blob/e3fa6f3637fa6d8ea97ef66ac1957950632b72ab/src/shortcuts/DateFormatter.js

export type Template = 'mm/dd/yyyy' | 'dd/mm/yyyy'
export type Blocks = number[]
export type Pattern = ['m', 'd', 'Y'] | ['d', 'm', 'Y']

export interface AutoFormatOptions {
  pattern?: Pattern
  value?: string
}

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
      setFormattedDate((prev) =>
        sanitizeDate({
          blocks,
          pattern,
          prevValue: prev,
          value: e.target.value,
        })
      )
    },
    [blocks, pattern]
  )

  return useMemo(
    () => ({
      onChange: handleDateChange,
      placeholder: template,
      value: formattedDate,
    }),
    [handleDateChange, template, formattedDate]
  )
}

function defaultAutoFormatOptions(options?: AutoFormatOptions) {
  return {
    pattern: options?.pattern ?? ['m', 'd', 'Y'],
    value: options?.value ?? '',
  }
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

export interface SanitizeOptions {
  blocks: Blocks
  pattern: Pattern
  prevValue: string
  value: string
}

function sanitizeDate(options: SanitizeOptions) {
  const { value } = options
  const template = getTemplate(options.pattern, options.blocks)
  // Only allow numeric characters
  const cleanVal = value.replace(/[^0-9]/gm, '')

  if (cleanVal.length === template.length + 1) {
    return options.prevValue
  }

  return formatValue(cleanVal, options)
}

function formatValue(value: string, formatOptions: SanitizeOptions) {
  const { blocks, pattern } = formatOptions
  const result = getFormattedMonthDay(value, blocks, pattern)

  return getFixedDateString({
    ...formatOptions,
    value: result,
  })
}

function getFormattedMonthDay(value: string, blocks: Blocks, pattern: Pattern) {
  let result = ''

  blocks.forEach((length, idx) => {
    if (value.length > 0) {
      let sub = value.slice(0, length)
      const rest = value.slice(length)
      const sub0 = sub.slice(0, 1)

      switch (pattern[idx]) {
        case 'd':
          if (sub === '00') {
            sub = '01'
          } else if (parseInt(sub0, 10) > 3) {
            sub = '0' + sub0
          } else if (parseInt(sub, 10) > 31) {
            sub = '31'
          }
          break

        case 'm':
          if (sub === '00') {
            sub = '01'
          } else if (parseInt(sub0, 10) > 1) {
            sub = '0' + sub0
          } else if (parseInt(sub, 10) > 12) {
            sub = '12'
          }
          break

        default:
          break
      }

      result += sub
      // update remaining string
      value = rest
    }
  })

  return result
}

function getFixedDateString(options: SanitizeOptions) {
  const { value } = options
  const datePattern = options.pattern
  const { date, fullYearDone } = getDateValues(value, datePattern)

  return getISOFormatDate(
    date.length === 0
      ? value
      : createDateFromPattern({
          pattern: options.pattern,
          date,
          fullYearDone,
        }),
    datePattern
  )
}

function getDateValues(value: string, pattern: Pattern) {
  let date: number[] = []
  let day = 0
  let month = 0
  let year = 0
  let dayIndex = 0
  let dayStartIndex = 0
  let monthIndex = 0
  let monthStartIndex = 0
  let yearIndex = 0
  let yearStartIndex = 0
  let fullYearDone = false

  if (isMMDDRange(value)) {
    dayStartIndex = pattern[0] === 'd' ? 0 : 2
    monthStartIndex = 2 - dayStartIndex
    day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10)
    month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10)
    date = getFixedDate(day, month, 0)
  }

  if (isMMDDYYYYRange(value)) {
    pattern.forEach((type, index) => {
      switch (type) {
        case 'd':
          dayIndex = index
          break

        case 'm':
          monthIndex = index
          break

        case 'Y':
          yearIndex = index
          break

        default:
          ShowInvalidOptionError()
          break
      }
    })

    yearStartIndex = yearIndex * 2
    dayStartIndex = dayIndex <= yearIndex ? dayIndex * 2 : dayIndex * 2 + 2
    monthStartIndex =
      monthIndex <= yearIndex ? monthIndex * 2 : monthIndex * 2 + 2

    day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10)
    month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10)
    year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10)
    date = getFixedDate(day, month, year)

    fullYearDone = value.slice(yearStartIndex, yearStartIndex + 4).length === 4
  }

  return {
    date,
    fullYearDone,
  }
}

function isMMDDRange(value: string) {
  return value.length === 4
}

function isMMDDYYYYRange(value: string) {
  return value.length === 8
}

function getFixedDate(day: number, month: number, year: number) {
  day = Math.min(day, 31)
  month = Math.min(month, 12)
  year = parseInt(String(year || 0), 10)

  if ((month < 7 && month % 2 === 0) || (month > 8 && month % 2 === 1)) {
    day = Math.min(day, month === 2 ? (isLeapYear(year) ? 29 : 28) : 30)
  }

  return [day, month, year]
}

function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

export interface DatePatternOptions {
  pattern: Pattern
  date: number[]
  fullYearDone: boolean
}

function createDateFromPattern(options: DatePatternOptions) {
  const { date } = options

  return options.pattern.reduce((prev, current) => {
    switch (current) {
      case 'd':
        return `${prev}${date[0] === 0 ? '' : addLeadingZero(date[0])}`

      case 'm':
        return `${prev}${date[1] === 0 ? '' : addLeadingZero(date[1])}`

      case 'Y':
        return `${prev}${
          options.fullYearDone ? addLeadingZeroForYear(date[2], true) : ''
        }`

      default:
        ShowInvalidOptionError()
        return prev
    }
  }, '')
}

function addLeadingZero(value: number) {
  return `${value < 10 ? '0' : ''}${value}`
}

function addLeadingZeroForYear(value: number, fullYearMode: boolean) {
  if (fullYearMode) {
    return `${
      value < 10 ? '000' : value < 100 ? '00' : value < 1000 ? '0' : ''
    }${value}`
  }

  return `${value < 10 ? '0' : ''}${value}`
}

function getISOFormatDate(value: string, pattern: Pattern) {
  const blocks = getBlocks(pattern)
  const delimeter = '/'
  const first = value.slice(0, 2)
  const second = value.slice(2, 4)
  const last = value.slice(blocks[2])

  if (value.length) {
    if (first && !second) {
      return `${first}`
    } else if (second && !last) {
      return `${first}${delimeter}${second}`
    } else {
      return `${first}${delimeter}${second}${delimeter}${last}`
    }
  }

  return ''
}

function ShowInvalidOptionError() {
  throw new Error(
    'Invalid date type passed into useAutoFormatDate. The allowed types are "m", "d", or "Y"'
  )
}
