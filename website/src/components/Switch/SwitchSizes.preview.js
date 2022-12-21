import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function SwitchSizesPreview() {
  return (
    <CodeBlock>{`const switchProps = getSwitchProps({ size: 's' })

<div {...switchProps.wrapper>
  <label {...switchProps.switchContainer}>
    <input {...switchProps.input} onClick={handleCheck} />
    <span {...switchProps.switchTrack}>
      <span {...switchProps.switchThumb} />
    </span>
  </label>
</div>`}</CodeBlock>
  )
}

export function SwitchSizesFullPreview() {
  return (
    <CodeBlock>{`import {
  getFormControlProps,
  getFormLabelProps,
  getSwitchProps,
} from '@pluralsight/headless-styles'

export default function SmallSwitch(props) {
  const { control, fieldOptions } = getFormControlProps(props)
  const switchProps = getSwitchProps({
    ...props,
    ...fieldOptions,
    //highlight-next-line
    size: 's'
  })
  const {value, ...labelProps} = getFormLabelProps({
    ...fieldOptions,
    htmlFor: props.id,
    //highlight-next-line
    size: 's',
    value: props.label
  })

  return (
    <div {...control}>
      <div {...switchProps.wrapper}>
        <label {...labelProps}>{value}</label>
        <label {...switchProps.switchContainer}>
          <input {...switchProps.input} onClick={props.onClick} />
          <span {...switchProps.switchTrack}>
            <span {...switchProps.switchThumb} />
          </span>
        </label>
      </div>
    </div>
  )
}`}</CodeBlock>
  )
}
