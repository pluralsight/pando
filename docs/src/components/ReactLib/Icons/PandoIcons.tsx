import * as PandoIcons from '@pluralsight/react/icons'
import iconJson from '@pluralsight/icons/icons.json'
import { IconButton } from '@pluralsight/react'
import { hstack } from '@/styled-system/patterns'

export default function ReactIcons() {
  console.log('PandoIcons', iconJson.categories)

  const allIcons: string[] = []
  for (const icon in PandoIcons) {
    allIcons.push(icon)
  }
  return (
    <div className={hstack({ flexWrap: 'wrap' })}>
      <h2 id="icon">icon</h2>
      {allIcons.map((icon) => {
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
  )
}
