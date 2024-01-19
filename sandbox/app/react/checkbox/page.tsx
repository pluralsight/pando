'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { vstack } from '@/styled-system/patterns'
import { checkbox } from '@/styled-system/recipes'
import { css, cx } from '@/styled-system/css'
import { CheckIcon } from '@pluralsight/icons'
import {
  createButtonIconProps,
  FormControlProvider,
  Checkbox,
} from '@pluralsight/react'
import {
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type PropsWithChildren,
} from 'react'

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
  const [checked, setChecked] = useState<boolean>(false)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setChecked(e.currentTarget.checked)
  }

  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <div className={vstack({ gap: '2', maxW: 'prose' })}>
          <CheckboxRecipe placeholder="Jane Doe" />
          <CheckboxRecipe disabled onChange={handleChange} />
          <CheckboxRecipe readOnly value="Readonly" />
          <CheckboxRecipe aria-invalid onChange={handleChange} />
        </div>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>React Usage</PageHeading>
        <FormControlProvider>
          <Checkbox
            id="name"
            name="name"
            onChange={handleChange}
            checked={checked}
          >
            Accept Terms
          </Checkbox>
        </FormControlProvider>
        <FormControlProvider disabled>
          <Checkbox
            id="name"
            name="name"
            onChange={handleChange}
            checked={checked}
          >
            Disabled
          </Checkbox>
        </FormControlProvider>
        <FormControlProvider readOnly>
          <Checkbox
            id="name"
            name="name"
            onChange={handleChange}
            checked={checked}
          >
            Read Only
          </Checkbox>
        </FormControlProvider>
        <FormControlProvider invalid>
          <Checkbox
            id="name"
            name="name"
            onChange={handleChange}
            checked={checked}
          >
            Invalid
          </Checkbox>
        </FormControlProvider>

        <FormControlProvider readOnly>
          <Checkbox
            id="name"
            name="name"
            onChange={handleChange}
            checked={checked}
            indeterminate={true}
          >
            Indeterminate
          </Checkbox>
        </FormControlProvider>
        <FormControlProvider invalid>
          <Checkbox
            id="name"
            name="name"
            onChange={handleChange}
            checked={checked}
            indeterminate={true}
          >
            Indeterminate Invalid
          </Checkbox>
        </FormControlProvider>
      </section>
    </>
  )
}
