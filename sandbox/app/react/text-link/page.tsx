import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { hstack } from '@/styled-system/patterns'
import { textLink } from '@/styled-system/recipes'
import { ExternalLinkIcon } from '@pluralsight/icons'
import { TextLink, createTextLinkIconProps } from '@pluralsight/react'

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
        <TextLink href="#">Local Link</TextLink>
        <br />
        <TextLink href="https://pando.pluralsight.com">External Link</TextLink>
        <br />
        <p className={css({ display: 'inline-flex', gap: '2' })}>
          <TextLink href="https://pando.pluralsight.com">
            External Link
          </TextLink>
          with some additional text that should follow it.
        </p>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>Custom Usage</PageHeading>
        <TextLink
          className={css({ color: 'yellow' })}
          href="https://pando.pluralsight.com"
        >
          External Link
        </TextLink>
      </section>
    </>
  )
}
