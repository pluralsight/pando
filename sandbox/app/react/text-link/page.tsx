import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { hstack } from '@/styled-system/patterns'
import { textLink } from '@/styled-system/recipes'
import { ExternalLinkIcon } from '@pluralsight/icons'
// import { TextLink } from '@pluralsight/react'

interface CreateTextLinkIconOptions {
  height: string
  width: string
}

function createTextLinkIconProps(options?: CreateTextLinkIconOptions) {
  return {
    'aria-hidden': true,
    className: css({ color: 'action.navigation.initial' }),
    height: options?.height ?? '1.25rem',
    width: options?.width ?? '1.25rem',
  }
}

export default function TextLinkPage() {
  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <a className={textLink()} href="#">
          Local Link
        </a>
        <span className={hstack({ gap: '1' })}>
          <a className={textLink()} href="https://pando.pluralsight.com">
            External Link
          </a>
          <ExternalLinkIcon {...createTextLinkIconProps()} />
        </span>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>React Usage</PageHeading>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>Custom Usage</PageHeading>
      </section>
    </>
  )
}
