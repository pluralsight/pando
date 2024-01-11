'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { vstack } from '@/styled-system/patterns'
import { fieldMessage } from '@/styled-system/recipes'
import { Input, Label, FormControlProvider } from '@pluralsight/react'
import { type PropsWithChildren } from 'react'

function FieldGroup(props: PropsWithChildren<Record<string, unknown>>) {
  return (
    <div className={vstack({ alignItems: 'start', gap: '0', mb: '4' })}>
      {props.children}
    </div>
  )
}

export default function FieldMessagePage() {
  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <FieldGroup>
          <FormControlProvider>
            <Label htmlFor="name">Name</Label>
            <Input name="name" aria-describedby="name:help" />
            <small id="name:help" className={fieldMessage()}>
              The name associated with your account.
            </small>
          </FormControlProvider>
        </FieldGroup>

        <FieldGroup>
          <FormControlProvider invalid>
            <Label htmlFor="hidden-name">Hidden Name</Label>
            <Input name="hidden-name" />
            <small
              id="name:help"
              className={fieldMessage({ usage: 'invalid' })}
            >
              A full name is required.
            </small>
          </FormControlProvider>
        </FieldGroup>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>React Usage</PageHeading>
        <FormControlProvider>
          <Label htmlFor="name">Name</Label>
          <Input name="name" />
        </FormControlProvider>

        <FormControlProvider required>
          <Label htmlFor="required-name">Name</Label>
          <Input name="required-name" />
        </FormControlProvider>

        <FormControlProvider>
          <Label htmlFor="hidden-name" usage="hidden">
            Hidden Name
          </Label>
          <Input name="hidden-name" />
        </FormControlProvider>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>Custom Usage</PageHeading>
        <FormControlProvider>
          <Label htmlFor="name" className={css({ color: 'yellow' })}>
            Name
          </Label>
          <Input name="name" />
        </FormControlProvider>

        <FormControlProvider>
          <Label htmlFor="name">Hidden Name</Label>
          <Input name="name" />
        </FormControlProvider>
      </section>
    </>
  )
}
