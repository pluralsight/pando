'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { vstack } from '@/styled-system/patterns'
import { checkbox } from '@/styled-system/recipes'
import { css, cx } from '@/styled-system/css'
import { CheckIcon, PlaceholderIcon } from '@pluralsight/icons'
import {
  createButtonIconProps,
  Input,
  FormControlProvider,
} from '@pluralsight/react'
import {
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type PropsWithChildren,
} from 'react'
import { createInputIconProps } from '@pluralsight/react/src/helpers/input.helpers'

function TempButtonIcon() {
  return (
    <CheckIcon
      {...createButtonIconProps({
        width: '0.75rem',
        height: '0.75rem',
      })}
    />
  )
}

function CheckboxRecipe(
  props: PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>,
) {
  const { ...nativeProps } = props
  const styles = checkbox()

  return (
    <div className={styles.root}>
      <input
        id="accept"
        name="accept"
        type="checkbox"
        className={cx('peer', styles.control)}
        {...nativeProps}
      />
      <span className={styles.icon}>
        <TempButtonIcon />
      </span>
    </div>
  )
}

export default function CheckboxPage() {
  const [value, setValue] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value)
  }

  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <div className={vstack({ gap: '2', maxW: 'prose' })}>
          <CheckboxRecipe placeholder="Jane Doe" />
          <CheckboxRecipe
            disabled
            onChange={handleChange}
            value={value ?? 'Disabled'}
          />
          <CheckboxRecipe readOnly value="Readonly" />
          <CheckboxRecipe
            aria-invalid
            onChange={handleChange}
            value={value ?? 'Invalid'}
          />
        </div>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>React Usage</PageHeading>
        <FormControlProvider>
          <Input id="name" name="name" placeholder="Jane Doe" />
        </FormControlProvider>
        <FormControlProvider disabled>
          <Input id="name" name="name" placeholder="Disabled" />
        </FormControlProvider>
        <FormControlProvider readOnly>
          <Input id="name" name="name" placeholder="Readonly" />
        </FormControlProvider>
        <FormControlProvider invalid>
          <Input id="name" name="name" placeholder="Readonly" />
        </FormControlProvider>

        <FormControlProvider>
          <Input id="name" name="name" placeholder="Jane Doe" pandoSize="md" />
        </FormControlProvider>
        <FormControlProvider disabled>
          <Input id="name" name="name" placeholder="Disabled" pandoSize="md" />
        </FormControlProvider>
        <FormControlProvider readOnly>
          <Input id="name" name="name" placeholder="Readonly" pandoSize="md" />
        </FormControlProvider>
        <FormControlProvider invalid>
          <Input id="name" name="name" placeholder="Readonly" pandoSize="md" />
        </FormControlProvider>
      </section>

      <section>
        <PageHeading>With StartIcon</PageHeading>
        <FormControlProvider>
          <Input
            id="name"
            name="name"
            placeholder="Jane Doe"
            startIcon={<PlaceholderIcon {...createInputIconProps()} />}
          />
        </FormControlProvider>
        <FormControlProvider>
          <Input
            id="name"
            name="name"
            pandoSize="md"
            placeholder="Jane Doe"
            startIcon={
              <PlaceholderIcon
                {...createInputIconProps({
                  pandoSize: 'md',
                })}
              />
            }
          />
        </FormControlProvider>
      </section>
    </>
  )
}
