import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { label } from '@/styled-system/recipes'
import { Label, FormControlProvider } from '@pluralsight/react'

function HiddenInput(props: { name?: string }) {
  return (
    <input className={css({ display: 'none' })} name={props.name} type="text" />
  )
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

      <section className={css({ my: '4' })}>
        <PageHeading>React Usage</PageHeading>
        <FormControlProvider>
          <Label htmlFor="name">Name</Label>
          <HiddenInput name="name" />
        </FormControlProvider>

        <FormControlProvider required>
          <Label htmlFor="required-name">Name</Label>
          <HiddenInput name="required-name" />
        </FormControlProvider>

        <FormControlProvider>
          <Label htmlFor="hidden-name" usage="hidden">
            Hidden Name
          </Label>
          <HiddenInput name="hidden-name" />
        </FormControlProvider>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>Custom Usage</PageHeading>
        <label htmlFor="name" className={css({ color: 'yellow' })}>
          Name
          <HiddenInput name="name" />
        </label>

        <FormControlProvider>
          <Label htmlFor="hidden-name" usage="hidden">
            Hidden Name
          </Label>
          <HiddenInput name="hidden-name" />
        </FormControlProvider>
      </section>
    </>
  )
}
