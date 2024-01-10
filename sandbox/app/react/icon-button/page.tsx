import { IconButton } from '@pluralsight/react'
import { PlaceholderIcon } from '@pluralsight/icons'
import { PageHeading } from '@/app/components/typography/PageHeading'
import { hstack } from '@/styled-system/patterns'
import { iconButton } from '@/styled-system/recipes'
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
          <button aria-label="example" className={iconButton()}>
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ palette: 'neutral' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ palette: 'danger' })}
          >
            <TempButtonIcon />
          </button>
          <button aria-label="example" className={iconButton()} disabled>
            <TempButtonIcon />
          </button>

          <button aria-label="example" className={iconButton({ size: 'md' })}>
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ palette: 'neutral', size: 'md' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ palette: 'danger', size: 'md' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ size: 'md' })}
            disabled
          >
            <TempButtonIcon />
          </button>

          <button aria-label="example" className={iconButton({ size: 'sm' })}>
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ palette: 'neutral', size: 'sm' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ palette: 'danger', size: 'sm' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ size: 'sm' })}
            disabled
          >
            <TempButtonIcon />
          </button>

          <button aria-label="example" className={iconButton({ size: 'xs' })}>
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ palette: 'neutral', size: 'xs' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ palette: 'danger', size: 'xs' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ size: 'xs' })}
            disabled
          >
            <TempButtonIcon />
          </button>
        </div>

        <div className={hstack({ gap: '2', mt: '4' })}>
          <button
            aria-label="example"
            className={iconButton({ usage: 'text' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ palette: 'neutral', usage: 'text' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ palette: 'danger', usage: 'text' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ usage: 'text' })}
            disabled
          >
            <TempButtonIcon />
          </button>

          <button
            aria-label="example"
            className={iconButton({ size: 'md', usage: 'text' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({
              palette: 'neutral',
              size: 'md',
              usage: 'text',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({
              palette: 'danger',
              size: 'md',
              usage: 'text',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ size: 'md', usage: 'text' })}
            disabled
          >
            <TempButtonIcon />
          </button>

          <button
            aria-label="example"
            className={iconButton({ size: 'sm', usage: 'text' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({
              palette: 'neutral',
              size: 'sm',
              usage: 'text',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({
              palette: 'danger',
              size: 'sm',
              usage: 'text',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ size: 'sm', usage: 'text' })}
            disabled
          >
            <TempButtonIcon />
          </button>

          <button
            aria-label="example"
            className={iconButton({ size: 'xs', usage: 'text' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({
              palette: 'neutral',
              size: 'xs',
              usage: 'text',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({
              palette: 'danger',
              size: 'xs',
              usage: 'text',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ size: 'xs', usage: 'text' })}
            disabled
          >
            <TempButtonIcon />
          </button>
        </div>

        <div className={hstack({ gap: '2', mt: '4' })}>
          <button
            aria-label="example"
            className={iconButton({ shape: 'circle' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ palette: 'neutral', shape: 'circle' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ palette: 'danger', shape: 'circle' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ shape: 'circle' })}
            disabled
          >
            <TempButtonIcon />
          </button>

          <button
            aria-label="example"
            className={iconButton({ size: 'md', shape: 'circle' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({
              palette: 'neutral',
              size: 'md',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({
              palette: 'danger',
              size: 'md',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ size: 'md', shape: 'circle' })}
            disabled
          >
            <TempButtonIcon />
          </button>

          <button
            aria-label="example"
            className={iconButton({ size: 'sm', shape: 'circle' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({
              palette: 'neutral',
              size: 'sm',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({
              palette: 'danger',
              size: 'sm',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ size: 'sm', shape: 'circle' })}
            disabled
          >
            <TempButtonIcon />
          </button>

          <button
            aria-label="example"
            className={iconButton({ size: 'xs', shape: 'circle' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({
              palette: 'neutral',
              size: 'xs',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({
              palette: 'danger',
              size: 'xs',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ size: 'xs', shape: 'circle' })}
            disabled
          >
            <TempButtonIcon />
          </button>
        </div>

        <div className={hstack({ gap: '2', mt: '4' })}>
          <button
            aria-label="example"
            className={iconButton({ usage: 'text', shape: 'circle' })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({
              palette: 'neutral',
              usage: 'text',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({
              palette: 'danger',
              usage: 'text',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
            className={iconButton({ usage: 'text', shape: 'circle' })}
            disabled
          >
            <TempButtonIcon />
          </button>

          <button
            aria-label="example"
            className={iconButton({
              size: 'md',
              usage: 'text',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
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
            aria-label="example"
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
            aria-label="example"
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
            aria-label="example"
            className={iconButton({
              size: 'sm',
              usage: 'text',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
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
            aria-label="example"
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
            aria-label="example"
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
            aria-label="example"
            className={iconButton({
              size: 'xs',
              usage: 'text',
              shape: 'circle',
            })}
          >
            <TempButtonIcon />
          </button>
          <button
            aria-label="example"
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
            aria-label="example"
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
            aria-label="example"
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
          <IconButton ariaLabel="placeholder button">
            <TempButtonIcon />
          </IconButton>
          <IconButton ariaLabel="placeholder button" palette="neutral">
            <TempButtonIcon />
          </IconButton>
          <IconButton ariaLabel="placeholder button" palette="danger">
            <TempButtonIcon />
          </IconButton>
          <IconButton ariaLabel="placeholder button" disabled>
            <TempButtonIcon />
          </IconButton>

          <IconButton ariaLabel="placeholder button" size="md">
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="neutral"
            size="md"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton ariaLabel="placeholder button" palette="danger" size="md">
            <TempButtonIcon />
          </IconButton>
          <IconButton ariaLabel="placeholder button" size="md" disabled>
            <TempButtonIcon />
          </IconButton>

          <IconButton ariaLabel="placeholder button" size="sm">
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="neutral"
            size="sm"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton ariaLabel="placeholder button" palette="danger" size="sm">
            <TempButtonIcon />
          </IconButton>
          <IconButton ariaLabel="placeholder button" size="sm" disabled>
            <TempButtonIcon />
          </IconButton>

          <IconButton ariaLabel="placeholder button" size="xs">
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="neutral"
            size="xs"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton ariaLabel="placeholder button" palette="danger" size="xs">
            <TempButtonIcon />
          </IconButton>
          <IconButton ariaLabel="placeholder button" size="xs" disabled>
            <TempButtonIcon />
          </IconButton>
        </div>

        <div className={hstack({ gap: '2', mt: '4' })}>
          <IconButton ariaLabel="placeholder button" usage="text">
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="neutral"
            usage="text"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="danger"
            usage="text"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton ariaLabel="placeholder button" usage="text" disabled>
            <TempButtonIcon />
          </IconButton>

          <IconButton ariaLabel="placeholder button" size="md" usage="text">
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="neutral"
            size="md"
            usage="text"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="danger"
            size="md"
            usage="text"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            size="md"
            usage="text"
            disabled
          >
            <TempButtonIcon />
          </IconButton>

          <IconButton ariaLabel="placeholder button" size="sm" usage="text">
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="neutral"
            size="sm"
            usage="text"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="danger"
            size="sm"
            usage="text"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            size="sm"
            usage="text"
            disabled
          >
            <TempButtonIcon />
          </IconButton>

          <IconButton ariaLabel="placeholder button" size="xs" usage="text">
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="neutral"
            size="xs"
            usage="text"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="danger"
            size="xs"
            usage="text"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            size="xs"
            usage="text"
            disabled
          >
            <TempButtonIcon />
          </IconButton>
        </div>

        <div className={hstack({ gap: '2', my: '4' })}>
          <IconButton ariaLabel="placeholder button" shape="circle">
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="neutral"
            shape="circle"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="danger"
            shape="circle"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton ariaLabel="placeholder button" shape="circle" disabled>
            <TempButtonIcon />
          </IconButton>

          <IconButton ariaLabel="placeholder button" size="md" shape="circle">
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="neutral"
            size="md"
            shape="circle"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="danger"
            size="md"
            shape="circle"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            size="md"
            shape="circle"
            disabled
          >
            <TempButtonIcon />
          </IconButton>

          <IconButton ariaLabel="placeholder button" size="sm" shape="circle">
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="neutral"
            size="sm"
            shape="circle"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="danger"
            size="sm"
            shape="circle"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            size="sm"
            shape="circle"
            disabled
          >
            <TempButtonIcon />
          </IconButton>

          <IconButton ariaLabel="placeholder button" size="xs" shape="circle">
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="neutral"
            size="xs"
            shape="circle"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            palette="danger"
            size="xs"
            shape="circle"
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="placeholder button"
            size="xs"
            shape="circle"
            disabled
          >
            <TempButtonIcon />
          </IconButton>
        </div>
      </section>

      <div className={hstack({ gap: '2' })}>
        <IconButton ariaLabel="placeholder button" shape="circle" usage="text">
          <TempButtonIcon />
        </IconButton>
        <IconButton
          ariaLabel="placeholder button"
          palette="neutral"
          shape="circle"
          usage="text"
        >
          <TempButtonIcon />
        </IconButton>
        <IconButton
          ariaLabel="placeholder button"
          palette="danger"
          shape="circle"
          usage="text"
        >
          <TempButtonIcon />
        </IconButton>
        <IconButton
          ariaLabel="placeholder button"
          shape="circle"
          usage="text"
          disabled
        >
          <TempButtonIcon />
        </IconButton>

        <IconButton
          ariaLabel="placeholder button"
          size="md"
          shape="circle"
          usage="text"
        >
          <TempButtonIcon />
        </IconButton>
        <IconButton
          ariaLabel="placeholder button"
          palette="neutral"
          size="md"
          shape="circle"
          usage="text"
        >
          <TempButtonIcon />
        </IconButton>
        <IconButton
          ariaLabel="placeholder button"
          palette="danger"
          size="md"
          shape="circle"
          usage="text"
        >
          <TempButtonIcon />
        </IconButton>
        <IconButton
          ariaLabel="placeholder button"
          size="md"
          shape="circle"
          usage="text"
          disabled
        >
          <TempButtonIcon />
        </IconButton>

        <IconButton
          ariaLabel="placeholder button"
          size="sm"
          shape="circle"
          usage="text"
        >
          <TempButtonIcon />
        </IconButton>
        <IconButton
          ariaLabel="placeholder button"
          palette="neutral"
          size="sm"
          shape="circle"
          usage="text"
        >
          <TempButtonIcon />
        </IconButton>
        <IconButton
          ariaLabel="placeholder button"
          palette="danger"
          size="sm"
          shape="circle"
          usage="text"
        >
          <TempButtonIcon />
        </IconButton>
        <IconButton
          ariaLabel="placeholder button"
          size="sm"
          shape="circle"
          usage="text"
          disabled
        >
          <TempButtonIcon />
        </IconButton>

        <IconButton
          ariaLabel="placeholder button"
          size="xs"
          shape="circle"
          usage="text"
        >
          <TempButtonIcon />
        </IconButton>
        <IconButton
          ariaLabel="placeholder button"
          palette="neutral"
          size="xs"
          shape="circle"
          usage="text"
        >
          <TempButtonIcon />
        </IconButton>
        <IconButton
          ariaLabel="placeholder button"
          palette="danger"
          size="xs"
          shape="circle"
          usage="text"
        >
          <TempButtonIcon />
        </IconButton>
        <IconButton
          ariaLabel="placeholder button"
          size="xs"
          shape="circle"
          usage="text"
          disabled
        >
          <TempButtonIcon />
        </IconButton>
      </div>

      <section className={css({ mt: '4' })}>
        <PageHeading>Custom Usage</PageHeading>
        <div className={hstack({ gap: '2' })}>
          <IconButton
            ariaLabel="custom button"
            className={css({
              bgColor: 'yellow.200',
              h: '6rem',
              pxi: '8',
              w: '6rem',
            })}
          >
            <TempButtonIcon />
          </IconButton>
          <IconButton
            ariaLabel="custom button"
            className={cx(
              iconButton({
                palette: 'neutral',
              }),
              css({
                h: '1rem',
              }),
            )}
          >
            <TempButtonIcon />
          </IconButton>
        </div>
      </section>
    </>
  )
}
