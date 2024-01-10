import { Button } from '@pluralsight/react'
import { PlaceholderIcon } from '@pluralsight/icons'
import { PageHeading } from '@/app/components/typography/PageHeading'
import { hstack } from '@/styled-system/patterns'
import { button, iconButton } from '@/styled-system/recipes'
import { css, cx } from '@/styled-system/css'

const tempBtnIconContent = <PlaceholderIcon aria-hidden />

function TempButtonIcon() {
  return tempBtnIconContent
}

export default function IconButtonPage() {
  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <div className={hstack({ gap: '2' })}>
          <button className={iconButton()}>
            <TempButtonIcon />
          </button>
          <button className={iconButton({ palette: 'neutral' })}>
            <TempButtonIcon />
          </button>
          <button className={iconButton({ palette: 'danger' })}>
            <TempButtonIcon />
          </button>
          <button className={iconButton()} disabled>
            <TempButtonIcon />
          </button>

          <button className={iconButton({ size: 'md' })}>
            <TempButtonIcon />
          </button>
          <button className={iconButton({ palette: 'neutral', size: 'md' })}>
            <TempButtonIcon />
          </button>
          <button className={iconButton({ palette: 'danger', size: 'md' })}>
            <TempButtonIcon />
          </button>
          <button className={iconButton({ size: 'md' })} disabled>
            <TempButtonIcon />
          </button>

          <button className={iconButton({ size: 'sm' })}>
            <TempButtonIcon />
          </button>
          <button className={iconButton({ palette: 'neutral', size: 'sm' })}>
            <TempButtonIcon />
          </button>
          <button className={iconButton({ palette: 'danger', size: 'sm' })}>
            <TempButtonIcon />
          </button>
          <button className={iconButton({ size: 'sm' })} disabled>
            <TempButtonIcon />
          </button>

          <button className={iconButton({ size: 'xs' })}>
            <TempButtonIcon />
          </button>
          <button className={iconButton({ palette: 'neutral', size: 'xs' })}>
            <TempButtonIcon />
          </button>
          <button className={iconButton({ palette: 'danger', size: 'xs' })}>
            <TempButtonIcon />
          </button>
          <button className={iconButton({ size: 'xs' })} disabled>
            <TempButtonIcon />
          </button>
        </div>

        <div className={hstack({ gap: '2', mt: '4' })}>
          <button className={iconButton({ usage: 'text' })}>
            <TempButtonIcon />
          </button>
          <button className={iconButton({ palette: 'neutral', usage: 'text' })}>
            <TempButtonIcon />
          </button>
          <button className={iconButton({ palette: 'danger', usage: 'text' })}>
            <TempButtonIcon />
          </button>
          <button className={iconButton({ usage: 'text' })} disabled>
            <TempButtonIcon />
          </button>

          <button className={iconButton({ size: 'md', usage: 'text' })}>
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'neutral',
              size: 'md',
              usage: 'text',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'danger',
              size: 'md',
              usage: 'text',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({ size: 'md', usage: 'text' })}
            disabled
          >
            <TempButtonIcon />
          </button>

          <button className={iconButton({ size: 'sm', usage: 'text' })}>
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'neutral',
              size: 'sm',
              usage: 'text',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'danger',
              size: 'sm',
              usage: 'text',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({ size: 'sm', usage: 'text' })}
            disabled
          >
            <TempButtonIcon />
          </button>

          <button className={iconButton({ size: 'xs', usage: 'text' })}>
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'neutral',
              size: 'xs',
              usage: 'text',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'danger',
              size: 'xs',
              usage: 'text',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({ size: 'xs', usage: 'text' })}
            disabled
          >
            <TempButtonIcon />
          </button>
        </div>

        <div className={hstack({ gap: '2', mt: '4' })}>
          <button className={iconButton({ shape: 'circle' })}>
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({ palette: 'neutral', shape: 'circle' })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({ palette: 'danger', shape: 'circle' })}
          >
            <TempButtonIcon />
          </button>
          <button className={iconButton({ shape: 'circle' })} disabled>
            <TempButtonIcon />
          </button>

          <button className={iconButton({ size: 'md', shape: 'circle' })}>
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'neutral',
              size: 'md',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'danger',
              size: 'md',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({ size: 'md', shape: 'circle' })}
            disabled
          >
            <TempButtonIcon />
          </button>

          <button className={iconButton({ size: 'sm', shape: 'circle' })}>
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'neutral',
              size: 'sm',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'danger',
              size: 'sm',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({ size: 'sm', shape: 'circle' })}
            disabled
          >
            <TempButtonIcon />
          </button>

          <button className={iconButton({ size: 'xs', shape: 'circle' })}>
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'neutral',
              size: 'xs',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'danger',
              size: 'xs',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({ size: 'xs', shape: 'circle' })}
            disabled
          >
            <TempButtonIcon />
          </button>
        </div>

        <div className={hstack({ gap: '2', mt: '4' })}>
          <button className={iconButton({ usage: 'text', shape: 'circle' })}>
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'neutral',
              usage: 'text',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'danger',
              usage: 'text',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({ usage: 'text', shape: 'circle' })}
            disabled
          >
            <TempButtonIcon />
          </button>

          <button
            className={iconButton({
              size: 'md',
              usage: 'text',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'neutral',
              size: 'md',
              usage: 'text',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'danger',
              size: 'md',
              usage: 'text',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              size: 'md',
              usage: 'text',
              shape: 'circle',
            })}
            disabled
          >
            <TempButtonIcon />
          </button>

          <button
            className={iconButton({
              size: 'sm',
              usage: 'text',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'neutral',
              size: 'sm',
              usage: 'text',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'danger',
              size: 'sm',
              usage: 'text',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              size: 'sm',
              usage: 'text',
              shape: 'circle',
            })}
            disabled
          >
            <TempButtonIcon />
          </button>

          <button
            className={iconButton({
              size: 'xs',
              usage: 'text',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'neutral',
              size: 'xs',
              usage: 'text',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              palette: 'danger',
              size: 'xs',
              usage: 'text',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            className={iconButton({
              size: 'xs',
              usage: 'text',
              shape: 'circle',
            })}
            disabled
          >
            <TempButtonIcon />
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
    </>
  )
}
