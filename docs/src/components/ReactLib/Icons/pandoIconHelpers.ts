import { type FunctionComponent } from 'react'
import * as Icons from '@pluralsight/react/icons'
import iconJson from '@pluralsight/icons/icons.json'

type IconsByCategory = {
  [key: string]: string[]
}

type PandoIcons = {
  [key: string]: FunctionComponent<{ title: string }>
}

export const objToArr = (obj: Record<string, any>) => {
  const arr = []
  for (const key in obj) {
    arr.push(key)
  }
  return arr
}

export const categorizedIcons: IconsByCategory = iconJson.categories

export const allPandoIcons: PandoIcons = Icons

export const iconCategories: string[] = objToArr(categorizedIcons)

export const transformIconName = (iconName: string) => {
  const splitOnDash = iconName.split('-')

  const toUpperCamelCase = splitOnDash.map((item: string) => {
    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
  })

  const joinedArr = toUpperCamelCase.join('')

  return `${joinedArr}Icon`
}
