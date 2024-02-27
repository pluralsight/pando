import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { vstack } from '@/styled-system/patterns'
import { progress } from '@/styled-system/recipes'

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
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>Custom Usage</PageHeading>
      </section>
    </>
  )
}
