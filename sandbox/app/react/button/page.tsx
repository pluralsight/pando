import { hstack } from '@/styled-system/patterns'
import { button } from '@/styled-system/recipes'

export default function ButtonPage() {
  return (
    <>
      <div className={hstack({ gap: '2' })}>
        <button className={button()}>Button</button>
        <button className={button({ palette: 'neutral' })}>Button</button>
        <button className={button({ palette: 'danger' })}>Button</button>
        <button className={button()} disabled>
          Button
        </button>
      </div>

      <div className={hstack({ gap: '2', mt: '4' })}>
        <button className={button({ usage: 'outline' })}>Button</button>
        <button className={button({ palette: 'neutral', usage: 'outline' })}>
          Button
        </button>
        <button className={button({ palette: 'danger', usage: 'outline' })}>
          Button
        </button>
        <button className={button({ usage: 'outline' })} disabled>
          Button
        </button>
      </div>

      <div className={hstack({ gap: '2', mt: '4' })}>
        <button className={button({ usage: 'text' })}>Button</button>
        <button className={button({ palette: 'neutral', usage: 'text' })}>
          Button
        </button>
        <button className={button({ palette: 'danger', usage: 'text' })}>
          Button
        </button>
        <button className={button({ usage: 'text' })} disabled>
          Button
        </button>
      </div>
    </>
  )
}
