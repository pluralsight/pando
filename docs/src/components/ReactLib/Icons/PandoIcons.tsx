import { useState, type ChangeEvent, type FunctionComponent } from 'react'
import Icons, { SearchIcon } from '@pluralsight/react/icons'
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

type IconObj = {
  [key: string]: FunctionComponent<{ title: string }>
}

const objToArr = (obj: Record<string, any>) => {
  const arr = []
  for (const key in obj) {
    arr.push(key)
  }
  return arr
}

const PandoIcons: IconObj = Icons

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
  const [iconSearchValue, setIconSearchValue] = useState('')

  function categoryHasIcons(category: string) {
    return categorizedIcons[category].some((icon: string) => {
      return icon.toLowerCase().includes(iconSearchValue.toLowerCase())
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
              setIconSearchValue(e.target.value)
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
                  .filter((iconName: string) => {
                    if (!iconSearchValue) return true

                    return iconName
                      .toLowerCase()
                      .includes(iconSearchValue.toLowerCase())
                  })
                  .map((iconName: string) => {
                    const formatToIconify = transformIconName(iconName)
                    const currIcon: FunctionComponent<{ title: string }> =
                      PandoIcons[formatToIconify]

                    return (
                      <div key={iconName}>
                        <span
                          data-tooltip
                          aria-label={iconName}
                          data-tooltip-placement="bottom"
                        >
                          <IconButton usage="text" ariaLabel={iconName}>
                            {currIcon({ title: iconName })}
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
