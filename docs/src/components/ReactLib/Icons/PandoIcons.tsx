import { useState, type ChangeEvent } from 'react'
import * as PandoIcons from '@pluralsight/react/icons'
import { SearchIcon } from '@pluralsight/react/icons'
import iconJson from '@pluralsight/icons/icons.json'
import {
  IconButton,
  Input,
  FormControlProvider,
  Label,
  Show,
} from '@pluralsight/react'
import { hstack } from '@/styled-system/patterns'
import { css } from '@/styled-system/css'

type CategorizedIcons = {
  [key: string]: string[]
}

const objToArr = (obj: Record<string, any>) => {
  const arr = []
  for (const key in obj) {
    arr.push(key)
  }
  return arr
}

const categorizedIcons: CategorizedIcons = iconJson.categories

const iconCategories: string[] = objToArr(categorizedIcons)

const transformIconName = (iconName: string) => {
  const splitOnDash = iconName.split('-')

  const toUpperCamelCase = splitOnDash.map((item: string) => {
    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
  })

  const joinedArr = toUpperCamelCase.join('')

  return `${joinedArr}Icon`
}

export default function ReactIcons() {
  const [iconSearch, setIconSearch] = useState('')

  function categoryHasIcons(category: string) {
    return categorizedIcons[category].some((icon: string) => {
      return icon.toLowerCase().includes(iconSearch.toLowerCase())
    })
  }

  return (
    <>
      <FormControlProvider>
        <div>
          <Label htmlFor="iconFilter">
            <SearchIcon />
            Search Icons
          </Label>
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setIconSearch(e.target.value)
            }}
            type="text"
            id="iconFilter"
            name="iconFilter"
          />
        </div>
      </FormControlProvider>
      <div>
        {iconCategories.map((category) => {
          return (
            <>
              <Show when={categoryHasIcons(category)}>
                <h2 className={css({ textTransform: 'capitalize' })}>
                  {category}
                </h2>
              </Show>
              <div className={hstack({ flexWrap: 'wrap' })}>
                {categorizedIcons[category]
                  .filter((icon: string) => {
                    if (!iconSearch) return true

                    return icon.toLowerCase().includes(iconSearch.toLowerCase())
                  })
                  .map((icon: string) => {
                    const transFormed = transformIconName(icon)
                    const currIcon = PandoIcons[transFormed]
                    return (
                      <div key={icon}>
                        <span
                          data-tooltip
                          aria-label={icon}
                          data-tooltip-placement="bottom"
                        >
                          <IconButton usage="text" ariaLabel={icon}>
                            {currIcon({ title: icon })}
                          </IconButton>
                        </span>
                      </div>
                    )
                  })}
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
