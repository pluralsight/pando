import { useState, type ChangeEvent, type FunctionComponent } from 'react'
import * as Icons from '@pluralsight/react/icons'
import { SearchIcon } from '@pluralsight/react/icons'
import {
  IconButton,
  Input,
  FormControlProvider,
  Show,
} from '@pluralsight/react'
import { hstack } from '@/styled-system/patterns'
import { css } from '@/styled-system/css'
import {
  categorizedIcons,
  iconCategories,
  transformIconName,
  allPandoIcons,
  objToArr,
} from './pandoIconHelpers'

const allIcons = objToArr(Icons)

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
        <div className={css({ position: 'relative' })}>
          <SearchIcon
            className={css({ position: 'absolute', top: '3', left: '3' })}
          />
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setIconSearchValue(e.target.value)
            }}
            type="text"
            id="iconFilter"
            name="iconFilter"
            placeholder={`Search ${allIcons.length} icons...`}
            className={css({ paddingLeft: '12' })}
          />
        </div>
      </FormControlProvider>

      {iconCategories.map((category) => {
        return (
          <div key={category}>
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
                    .includes(iconSearchValue.toLowerCase().trim())
                })
                .map((iconName: string) => {
                  const formatToIconify = transformIconName(iconName)
                  const currIcon: FunctionComponent<{ title: string }> =
                    allPandoIcons[formatToIconify]

                  return (
                    <span
                      key={iconName}
                      data-tooltip
                      aria-label={iconName}
                      data-tooltip-placement="bottom"
                    >
                      <IconButton usage="text" ariaLabel={iconName}>
                        {currIcon({ title: iconName })}
                      </IconButton>
                    </span>
                  )
                })}
            </div>
          </div>
        )
      })}
    </>
  )
}
