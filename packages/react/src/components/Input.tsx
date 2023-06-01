import {
  forwardRef,
  InputHTMLAttributes,
  ForwardedRef,
  ElementType,
} from 'react'
import {
  getIconProps,
  getInputProps,
  getInputWrapperProps,
  getInputInvalidIconProps,
  getInputStartIconProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import { PlaceholderIcon, WarningTriangleFilledIcon } from '@pluralsight/icons'
import { Show, useFormControl } from '../index.ts'
import type { InputOptions } from '@pluralsight/headless-styles/types'

// <StartIcon />

function StartInputIcon(
  props: Required<Pick<InputProps, 'pandoSize' | 'startIcon'>>
) {
  const pandoProps = getInputStartIconProps(props.pandoSize)
  const DynamicIcon = props.startIcon

  return (
    <span {...pandoProps.iconWrapper}>
      <DynamicIcon {...getIconProps(pandoProps.iconOptions)} />
    </span>
  )
}

// <InvalidIcon />

function InvalidInputIcon(props: Required<Pick<InputOptions, 'pandoSize'>>) {
  const pandoProps = getInputInvalidIconProps(props.pandoSize)

  return (
    <span {...pandoProps.invalidIconWrapper}>
      <WarningTriangleFilledIcon
        {...getIconProps(pandoProps.invalidIconOptions)}
      />
    </span>
  )
}

// <Input />

interface InputProps
  extends InputOptions,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'name'> {
  startIcon?: ElementType
}

function InputEl(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const { describedBy, pandoSize, startIcon, ...nativeProps } = props
  const state = useFormControl()
  const pandoInputProps = getInputProps({
    ...state,
    ...nativeProps,
    describedBy,
    classNames: splitClassNameProp(nativeProps.className),
    kind: startIcon ? 'icon' : 'default',
    pandoSize,
  })

  return (
    <div {...getInputWrapperProps()}>
      <Show when={Boolean(startIcon)} fallback={null}>
        <StartInputIcon
          startIcon={props.startIcon ?? PlaceholderIcon}
          pandoSize={pandoSize ?? 'l'}
        />
      </Show>

      <input {...nativeProps} {...pandoInputProps} ref={ref} />

      <Show when={state.invalid ?? false} fallback={null}>
        <InvalidInputIcon pandoSize={pandoSize ?? 'l'} />
      </Show>
    </div>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputEl)
