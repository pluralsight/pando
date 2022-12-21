import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicSwitchPreview() {
  return (
    <CodeBlock>{`const switchProps = getSwitchProps()

<div {...switchProps.wrapper}>
  <label {...switchProps.switchContainer}>
    <input {...switchProps.input} onChange={handleCheck} />
    <span {...switchProps.switchTrack}>
      <span {...switchProps.switchThumb} />
    </span>
  </label>
</div>`}</CodeBlock>
  )
}

export function BasicSwitchFullPreview() {
  return (
    <CodeBlock>{`import {
  getFormControlProps,
  getFormLabelProps,
  getSwitchProps,
} from '@pluralsight/headless-styles'

export default function Switch(props) {
  const { control, fieldOptions } = getFormControlProps(props)
  const switchProps = getSwitchProps({ ...props, ...fieldOptions })
  const {value, ...labelProps} = getFormLabelProps({
    ...fieldOptions,
    htmlFor: props.id,
    size: props.size,
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
