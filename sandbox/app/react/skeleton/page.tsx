import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { hstack } from '@/styled-system/patterns'
import { skeleton } from '@/styled-system/recipes'
import { Skeleton } from '@pluralsight/react'

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
        <Skeleton size="sm" />
        <Skeleton size="md" />
        <Skeleton size="lg" />
        <Skeleton size="xl" />
        <div className={hstack({ gap: '4' })}>
          <Skeleton shape="circle" size="sm" />
          <Skeleton shape="circle" size="md" />
          <Skeleton shape="circle" size="lg" />
          <Skeleton shape="circle" size="xl" />
        </div>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>Custom Usage</PageHeading>
        <Skeleton className={css({ bgColor: 'yellow' })} />
        <Skeleton shape="circle" className={css({ bgColor: 'yellow' })} />
      </section>
    </>
  )
}
