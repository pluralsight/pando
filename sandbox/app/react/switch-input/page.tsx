'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { css, cx } from '@/styled-system/css'
import { hstack, vstack } from '@/styled-system/patterns'
import { switchInput } from '@/styled-system/recipes'
import { useState, type PropsWithChildren, useCallback } from 'react'

interface SwitchInputProps {
  checked: boolean
  onChange: () => void
  disabled?: boolean
  invalid?: boolean
  size?: 'sm' | 'lg'
}

// This is a simplified version of the SwitchInput component for recipe testing.
// DO NOT USE THIS COMPONENT AS A CUSTOMIZATION TEMPLATE IN PRODUCTION.
function SwitchInputRecipe(props: PropsWithChildren<SwitchInputProps>) {
  return (
    <label
      aria-invalid={props.invalid}
      aria-checked={props.checked}
      data-disabled={props.disabled}
      className={cx(
        'group',
        hstack({ w: 'fit-content' }),
        switchInput({ size: props.size }).root,
      )}
    >
      <div className={switchInput({ size: props.size }).track}>
        <input
          aria-invalid={props.invalid}
          className={cx('peer', switchInput({ size: props.size }).control)}
          checked={props.checked}
          disabled={props.disabled}
          name="switch-input"
          onChange={props.onChange}
          type="checkbox"
        />
        <span className={switchInput({ size: props.size }).thumb} />
      </div>
      {props.children}
    </label>
  )
}

export default function SwitchInputPage() {
  const [checked, setChecked] = useState(false)

  const handleToggle = useCallback(() => {
    setChecked((prev) => !prev)
  }, [])

  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <div className={vstack({ alignItems: 'flex-start' })}>
          <SwitchInputRecipe checked={checked} onChange={handleToggle} />
          <SwitchInputRecipe checked={checked} onChange={handleToggle} />
          <SwitchInputRecipe checked={checked} disabled onChange={handleToggle}>
            Disabled
          </SwitchInputRecipe>
          <SwitchInputRecipe checked={checked} invalid onChange={handleToggle}>
            Invalid
          </SwitchInputRecipe>
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
