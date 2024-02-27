import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { vstack } from '@/styled-system/patterns'
import { progress } from '@/styled-system/recipes'
import { ProgressBar } from '@pluralsight/react'

export default function ProgressBarPage() {
  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <div className={vstack()}>
          <div role="progressbar" className={progress({ size: 'md' }).root}>
            <div
              className={progress({ size: 'md' }).bar}
              style={{ width: '25%' }}
            />
          </div>
          <div role="progressbar" className={progress({}).root}>
            <div className={progress({}).bar} style={{ width: '25%' }} />
          </div>
          <br />
          <div
            role="progressbar"
            className={progress({ usage: 'inset', size: 'md' }).root}
          >
            <div
              className={progress({ usage: 'inset', size: 'md' }).bar}
              style={{ width: '25%' }}
            />
            b
          </div>
          <div role="progressbar" className={progress({ usage: 'inset' }).root}>
            <div
              className={progress({ usage: 'inset' }).bar}
              style={{ width: '25%' }}
            />
          </div>
        </div>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>React Usage</PageHeading>
        <div className={vstack()}>
          <ProgressBar ariaLabel="Progress" now={25} />
          <ProgressBar ariaLabel="Progress" now={25} size="md" />
          <ProgressBar ariaLabel="Progress" now={25} usage="inset" />
          <ProgressBar ariaLabel="Progress" now={25} usage="inset" size="md" />
        </div>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>Custom Usage</PageHeading>
        <ProgressBar
          ariaLabel="Progress"
          now={25}
          className={css({
            bgColor: 'yellow',
            h: '10',
          })}
        />
      </section>
    </>
  )
}
