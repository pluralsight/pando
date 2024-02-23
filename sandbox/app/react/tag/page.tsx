import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { hstack } from '@/styled-system/patterns'
import { tag } from '@/styled-system/recipes'
import { Tag } from '@pluralsight/react'

export default function TagPage() {
  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <div className={hstack()}>
          <a className={tag({ size: 'sm' })} href="#">
            Small
          </a>
          <a className={tag()} href="#">
            Medium
          </a>
        </div>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>React Usage</PageHeading>
        <div className={hstack()}>
          <Tag size="sm" href="#">
            Small
          </Tag>
          <Tag href="#">Medium</Tag>
        </div>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>Custom Usage</PageHeading>
        <Tag
          className={css({ borderColor: 'yellow', color: 'yellow' })}
          href="#"
        >
          Custom
        </Tag>
      </section>
    </>
  )
}
