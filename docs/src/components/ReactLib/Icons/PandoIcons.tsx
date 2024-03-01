import * as PandoIcons from '@pluralsight/react/icons'
import { IconButton } from '@pluralsight/react'
import { hstack } from '@/styled-system/patterns'
import { css } from '@/styled-system/css'

export default function ReactIcons() {
  console.log('PandoIcons')

  const allIcons: string[] = []
  for (const icon in PandoIcons) {
    allIcons.push(icon)
  }
  return (
    <div className={hstack({ flexWrap: 'wrap' })}>
      {allIcons.map((icon) => {
        const currIcon = PandoIcons[icon]
        return (
          <div key={icon}>
            <span
              className={css({ height: '1.25rem' })}
              data-tooltip
              aria-label={'hi'}
            >
              <IconButton usage="text" ariaLabel={icon}>
                {currIcon({ title: icon })}
              </IconButton>
            </span>
          </div>
        )
      })}
    </div>
  )
}
