'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { css, cx } from '@/styled-system/css'
import { VStack } from '@/styled-system/jsx'
import { hstack, type VstackProperties } from '@/styled-system/patterns'
import { switchInput } from '@/styled-system/recipes'
import {
  FormControlProvider,
  SwitchInput,
  SwitchInputButton,
  SwitchInputLabel,
  Toggle,
  ToggleButton,
  ToggleLabel,
} from '@pluralsight/react'
import {
  useState,
  type PropsWithChildren,
  useCallback,
  type HTMLAttributes,
} from 'react'

interface SwitchInputProps {
  checked: boolean
  onChange: () => void
  disabled?: boolean
  invalid?: boolean
  size?: 'sm' | 'lg'
}

function Vstack(props: PropsWithChildren<HTMLAttributes<VstackProperties>>) {
  return (
    <VStack alignItems="flex-start" className={props.className}>
      {props.children}
    </VStack>
  )
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
  const [reactChecked, setReactChecked] = useState(false)

  const handleToggle = useCallback(() => {
    setChecked((prev) => !prev)
  }, [])

  const handleReactToggle = useCallback(() => {
    setReactChecked((prev) => !prev)
  }, [])

  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <Vstack>
          <SwitchInputRecipe
            checked={checked}
            onChange={handleToggle}
            size="sm"
          />
          <label
            aria-checked={checked}
            className={cx(
              'group',
              hstack({ w: 'fit-content' }),
              switchInput({ size: 'sm' }).root,
            )}
          >
            <div className={switchInput({ size: 'sm' }).track}>
              <input
                className={cx('peer', switchInput({ size: 'sm' }).control)}
                checked={checked}
                name="switch-input"
                onChange={handleToggle}
                type="checkbox"
              />
              <span className={switchInput({ size: 'sm' }).thumb} />
            </div>
            Test
          </label>
          <SwitchInputRecipe
            checked={checked}
            disabled
            onChange={handleToggle}
            size="sm"
          >
            Disabled
          </SwitchInputRecipe>
          <SwitchInputRecipe
            checked={checked}
            invalid
            onChange={handleToggle}
            size="sm"
          >
            Invalid
          </SwitchInputRecipe>
        </Vstack>
        <Vstack className={css({ mt: '4' })}>
          <SwitchInputRecipe checked={checked} onChange={handleToggle} />
          <SwitchInputRecipe checked={checked} onChange={handleToggle}>
            Test
          </SwitchInputRecipe>
          <SwitchInputRecipe checked={checked} disabled onChange={handleToggle}>
            Disabled
          </SwitchInputRecipe>
          <SwitchInputRecipe checked={checked} invalid onChange={handleToggle}>
            Invalid
          </SwitchInputRecipe>
        </Vstack>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>React Usage</PageHeading>
        <Vstack>
          <FormControlProvider checked={reactChecked}>
            <Toggle htmlFor="switch-input" size="sm">
              <ToggleLabel>Default</ToggleLabel>
              <ToggleButton
                name="switch-input"
                onChange={handleReactToggle}
                pandoSize="sm"
              />
            </Toggle>
          </FormControlProvider>
          <FormControlProvider checked={reactChecked} disabled>
            <Toggle htmlFor="switch-input" size="sm">
              <ToggleLabel>Disabled</ToggleLabel>
              <ToggleButton
                name="switch-input"
                onChange={handleReactToggle}
                pandoSize="sm"
              />
            </Toggle>
          </FormControlProvider>
          <FormControlProvider checked={reactChecked} readOnly>
            <Toggle htmlFor="switch-input" size="sm">
              <ToggleButton
                name="switch-input"
                onChange={handleReactToggle}
                pandoSize="sm"
              />
              <ToggleLabel>Readonly</ToggleLabel>
            </Toggle>
          </FormControlProvider>
          <FormControlProvider checked={reactChecked} required>
            <Toggle htmlFor="switch-input" size="sm">
              <ToggleButton
                name="switch-input"
                onChange={handleReactToggle}
                pandoSize="sm"
              />
              <ToggleLabel>Required</ToggleLabel>
            </Toggle>
          </FormControlProvider>
          <FormControlProvider checked={reactChecked} invalid>
            <Toggle htmlFor="switch-input" size="sm">
              <ToggleButton
                name="switch-input"
                onChange={handleReactToggle}
                pandoSize="sm"
              />
              <ToggleLabel>Invalid</ToggleLabel>
            </Toggle>
          </FormControlProvider>
        </Vstack>
        <Vstack className={css({ mt: '4' })}>
          <FormControlProvider checked={reactChecked}>
            <SwitchInput htmlFor="switch-input">
              <SwitchInputLabel>Default</SwitchInputLabel>
              <SwitchInputButton
                name="switch-input"
                onChange={handleReactToggle}
              />
            </SwitchInput>
          </FormControlProvider>
          <FormControlProvider checked={reactChecked} disabled>
            <SwitchInput htmlFor="switch-input">
              <SwitchInputLabel>Disabled</SwitchInputLabel>
              <SwitchInputButton
                name="switch-input"
                onChange={handleReactToggle}
              />
            </SwitchInput>
          </FormControlProvider>
          <FormControlProvider checked={reactChecked} readOnly>
            <SwitchInput htmlFor="switch-input">
              <SwitchInputButton
                name="switch-input"
                onChange={handleReactToggle}
              />
              <SwitchInputLabel>Readonly</SwitchInputLabel>
            </SwitchInput>
          </FormControlProvider>
          <FormControlProvider checked={reactChecked} required>
            <SwitchInput htmlFor="switch-input">
              <SwitchInputButton
                name="switch-input"
                onChange={handleReactToggle}
              />
              <SwitchInputLabel>Required</SwitchInputLabel>
            </SwitchInput>
          </FormControlProvider>
          <FormControlProvider checked={reactChecked} invalid>
            <SwitchInput htmlFor="switch-input">
              <SwitchInputButton
                name="switch-input"
                onChange={handleReactToggle}
              />
              <SwitchInputLabel>Invalid</SwitchInputLabel>
            </SwitchInput>
          </FormControlProvider>
        </Vstack>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>Custom Usage</PageHeading>
        <FormControlProvider checked={reactChecked}>
          <Toggle
            className={css({
              bgColor: 'yellow',
              color: 'black',
            })}
            htmlFor="switch-input"
          >
            <ToggleButton name="switch-input" onChange={handleReactToggle} />
            <ToggleLabel>Custom</ToggleLabel>
          </Toggle>
        </FormControlProvider>
      </section>
    </>
  )
}
