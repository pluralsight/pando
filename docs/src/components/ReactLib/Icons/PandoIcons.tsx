import { useState, type ChangeEvent, type FunctionComponent } from 'react'
import { SearchIcon } from '@pluralsight/react/icons'
import {
  IconButton,
  Input,
  FormControlProvider,
  Label,
  Show,
} from '@pluralsight/react'
import { hstack } from '@/styled-system/patterns'
import { css } from '@/styled-system/css'
import {
  categorizedIcons,
  iconCategories,
  transformIconName,
  PandoIcons,
} from './pandoIconHelpers'

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
          </div>
        )
      })}
    </>
  )
}
