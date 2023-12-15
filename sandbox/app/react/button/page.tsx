import { Button } from '@pluralsight/react'
import { PlaceholderIcon } from '@pluralsight/icons'
import { PageHeading } from '@/app/components/typography/PageHeading'
import { hstack } from '@/styled-system/patterns'
import { button } from '@/styled-system/recipes'
import { css, cx } from '@/styled-system/css'

const tempBtnIconContent = (
  <PlaceholderIcon aria-label="hidden" height="1.25rem" width="1.25rem" />
)

function TempButtonIcon() {
  return tempBtnIconContent
}

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
          <Button palette="neutral">Button</Button>
          <Button palette="danger">Button</Button>
          <Button disabled>Button</Button>

          <Button size="md">Button</Button>
          <Button palette="neutral" size="md">
            Button
          </Button>
          <Button palette="danger" size="md">
            Button
          </Button>
          <Button size="md" disabled>
            Button
          </Button>
        </div>
      </section>

      <section className={css({ mt: '4' })}>
        <PageHeading>Custom Usage</PageHeading>
        <div className={hstack({ gap: '2' })}>
          <Button
            className={css({
              bgColor: 'yellow.200',
              color: 'black',
              pxi: '4',
            })}
          >
            Wu-Tang
          </Button>
          <Button
            className={cx(
              button({
                palette: 'neutral',
              }),
              css({
                h: '1rem',
              }),
            )}
          >
            Button
          </Button>
        </div>
      </section>

      <section className={css({ mt: '4' })}>
        <PageHeading>With Icons</PageHeading>
        <div className={hstack({ gap: '2' })}>
          <Button startIcon={<TempButtonIcon />}>Button</Button>
          <Button endIcon={<TempButtonIcon />}>Button</Button>
          <Button startIcon={<TempButtonIcon />} endIcon={<TempButtonIcon />}>
            Button
          </Button>
        </div>
      </section>
    </>
  )
}
