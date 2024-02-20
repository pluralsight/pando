import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { hstack } from '@/styled-system/patterns'
import { skeleton } from '@/styled-system/recipes'

export default function SkeletonPage() {
  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <div className={skeleton({ size: 'sm' })} />
        <div className={skeleton({ size: 'md' })} />
        <div className={skeleton({ size: 'lg' })} />
        <div className={skeleton({ size: 'xl' })} />
        <div className={hstack({ gap: '4' })}>
          <div className={skeleton({ shape: 'circle', size: 'sm' })} />
          <div className={skeleton({ shape: 'circle', size: 'md' })} />
          <div className={skeleton({ shape: 'circle', size: 'lg' })} />
          <div className={skeleton({ shape: 'circle', size: 'xl' })} />
        </div>
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
