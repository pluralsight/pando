import { hstack } from '@/styled-system/patterns'
import { button } from '@/styled-system/recipes'
import { PageHeading } from '@/app/components/typography/PageHeading'
import { Button } from '@pluralsight/react'
import { css } from '@/styled-system/css'

export default function ButtonPage() {
  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <div className={hstack({ gap: '2' })}>
          <button className={button()}>Button</button>
          <button className={button({ palette: 'neutral' })}>Button</button>
          <button className={button({ palette: 'danger' })}>Button</button>
          <button className={button()} disabled>
            Button
          </button>

          <button className={button({ size: 'md' })}>Button</button>
          <button className={button({ palette: 'neutral', size: 'md' })}>
            Button
          </button>
          <button className={button({ palette: 'danger', size: 'md' })}>
            Button
          </button>
          <button className={button({ size: 'md' })} disabled>
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

          <button className={button({ usage: 'outline', size: 'md' })}>
            Button
          </button>
          <button
            className={button({
              palette: 'neutral',
              usage: 'outline',
              size: 'md',
            })}
          >
            Button
          </button>
          <button
            className={button({
              palette: 'danger',
              usage: 'outline',
              size: 'md',
            })}
          >
            Button
          </button>
          <button className={button({ usage: 'outline', size: 'md' })} disabled>
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

          <button className={button({ usage: 'text', size: 'md' })}>
            Button
          </button>
          <button
            className={button({
              palette: 'neutral',
              usage: 'text',
              size: 'md',
            })}
          >
            Button
          </button>
          <button
            className={button({ palette: 'danger', usage: 'text', size: 'md' })}
          >
            Button
          </button>
          <button className={button({ usage: 'text', size: 'md' })} disabled>
            Button
          </button>
        </div>
      </section>

      <section className={css({ mt: '4' })}>
        <PageHeading>React Usage</PageHeading>
        <div className={hstack({ gap: '2' })}>
          <Button>Button</Button>
        </div>
      </section>
    </>
  )
}
