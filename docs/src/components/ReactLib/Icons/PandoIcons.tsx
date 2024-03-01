import { useState, type ChangeEvent } from 'react'
import * as PandoIcons from '@pluralsight/react/icons'
import { SearchIcon } from '@pluralsight/react/icons'
import iconJson from '@pluralsight/icons/icons.json'
import {
  IconButton,
  Input,
  FormControlProvider,
  Label,
} from '@pluralsight/react'
import { hstack } from '@/styled-system/patterns'

export default function ReactIcons() {
  console.log('PandoIcons', iconJson.categories)

  const [iconSearch, setIconSearch] = useState('')

  const allIcons: string[] = []
  for (const icon in PandoIcons) {
    allIcons.push(icon)
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
      <div className={hstack({ flexWrap: 'wrap' })}>
        {allIcons
          .filter((icon) => {
            if (!iconSearch) return true

            return icon.toLowerCase().includes(iconSearch.toLowerCase())
          })
          .map((icon) => {
            const currIcon = PandoIcons[icon]

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
}
