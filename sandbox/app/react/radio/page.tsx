'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { FormControlProvider, Radio } from '@pluralsight/react'
import { hstack } from '@/styled-system/patterns'
import { radio } from '@/styled-system/recipes'
import { css, cx } from '@/styled-system/css'
import {
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type PropsWithChildren,
} from 'react'

// This is a simplified version of the Admonition component for recipe testing.
// DO NOT USE THIS COMPONENT AS A CUSTOMIZATION TEMPLATE IN PRODUCTION.
function RadioRecipe(
  props: PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>,
) {
  const { ...nativeProps } = props
  const styles = radio()

  return (
    <label htmlFor={nativeProps.id} className={hstack({ gap: '0' })}>
      <div className={styles.root}>
        <input
          {...nativeProps}
          className={cx('peer', styles.control)}
          name={nativeProps.id}
          type="radio"
        />
        <span className={styles.container} />
      </div>
      {props.value}
    </label>
  )
}

export default function RadioPage() {
  const [checked, setChecked] = useState<string>('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log('target', e.currentTarget.value)
    setChecked(e.currentTarget.value)
  }

  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <fieldset name="option">
          <legend>Choose an option</legend>
          <RadioRecipe disabled defaultChecked={false} value="disabled" />
          <RadioRecipe readOnly defaultChecked={true} value="Readonly" />
          <RadioRecipe
            id="normal"
            onChange={handleChange}
            checked={checked === 'normal'}
            value="normal"
          />
          <RadioRecipe
            aria-invalid
            id="invalid"
            onChange={handleChange}
            checked={checked === 'invalid'}
            value="invalid"
          />
        </fieldset>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>React Usage</PageHeading>
        <fieldset name="react-option">
          <legend>Choose an option</legend>
          <FormControlProvider readOnly>
            <Radio defaultChecked={true} name="readonly">
              Read only
            </Radio>
          </FormControlProvider>
          <FormControlProvider disabled>
            <Radio defaultChecked={false} name="disabled">
              Disabled
            </Radio>
          </FormControlProvider>
          <FormControlProvider>
            <Radio
              name="normal"
              onChange={handleChange}
              checked={checked === 'normal'}
              value="normal"
            >
              Normal
            </Radio>
          </FormControlProvider>
          <FormControlProvider invalid>
            <Radio
              name="invalid"
              onChange={handleChange}
              checked={checked === 'invalid'}
              value="invalid"
            >
              Invalid
            </Radio>
          </FormControlProvider>
        </fieldset>
      </section>
    </>
  )
}
