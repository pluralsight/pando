import * as PandoIcons from '@pluralsight/react/icons'
import { flex } from '@/styled-system/patterns'
import { css } from '@/styled-system/css'

export default function ReactIcons() {
  console.log('PandoIcons', PandoIcons.AccountIcon)

  const allIcons: string[] = []
  for (const icon in PandoIcons) {
    allIcons.push(icon)
  }
  return (
    <div className={flex()}>
      {allIcons.map((icon) => {
        const currIcon = PandoIcons[icon]
        return (
          <div className={css({ h: '3', w: '3' })}>
            {currIcon({ title: icon })}
          </div>
        )
      })}
    </div>
  )
}
