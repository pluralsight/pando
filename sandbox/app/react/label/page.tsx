import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { label } from '@/styled-system/recipes'

function HiddenInput() {
  return <input className={css({ display: 'none' })} type="text" />
}

export default function LabelPage() {
  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <label className={label()}>
          Name
          <HiddenInput />
        </label>
        <label className={label({ usage: 'hidden' })}>
          Hidden Name
          <HiddenInput />
        </label>
      </section>
    </>
  )
}
