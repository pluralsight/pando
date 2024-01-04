import { PageHeading } from '@/app/components/typography/PageHeading'
import { label } from '@/styled-system/recipes'

export default function LabelPage() {
  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <label className={label()}>Name</label>
        <label className={label({ usage: 'hidden' })}>Hidden Name</label>
      </section>
    </>
  )
}
