'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { vstack } from '@/styled-system/patterns'
import { fieldMessage } from '@/styled-system/recipes'
import {
  Input,
  Label,
  FormControlProvider,
  FieldMessage,
} from '@pluralsight/react'
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
        <FieldGroup>
          <FormControlProvider>
            <Label htmlFor="name">Name</Label>
            <Input name="name" aria-describedby="help:name" />
            <FieldMessage id="help:name">
              The name associated with your account.
            </FieldMessage>
          </FormControlProvider>
        </FieldGroup>

        <FormControlProvider required invalid>
          <Label htmlFor="required-name">Name</Label>
          <Input aria-describedby="error:name" name="required-name" />
          <FieldMessage id="error:name">A full name is required.</FieldMessage>
        </FormControlProvider>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>Custom Usage</PageHeading>
        <FormControlProvider>
          <Label htmlFor="name" className={css({ color: 'yellow' })}>
            Name
          </Label>
          <Input name="name" aria-describedby="help:name" />
          <FieldMessage className={css({ color: 'yellow' })} id="help:name">
            The name associated with your account.
          </FieldMessage>
        </FormControlProvider>

        <FormControlProvider>
          <Label htmlFor="name">Invalid Name</Label>
          <Input aria-describedby="error:name" name="required-name" />
          <FieldMessage className={css({ fontSize: 'xl' })} id="error:name">
            A full name is required.
          </FieldMessage>
        </FormControlProvider>
      </section>
    </>
  )
}
