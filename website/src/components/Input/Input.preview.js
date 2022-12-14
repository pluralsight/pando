import React from 'react'
import CodeBlock from '@theme/CodeBlock'

const inputPreview = (
  <CodeBlock>{`import {
    getErrorMessageProps,
    getFormControlProps,
    getFormLabelProps,
    getIconProps,
    getInputProps
} from '@pluralsight/headless-styles';
import { WarningTriangleFilledIcon } from '@pluralsight/icons'

export default function BasicInput(props) {
  const { id, onChange, ...inputOptions } = props
  const { fieldOptions } = getFormControlProps(inputOptions)
  const errorId = \`\${id}:errorMessage\`
  const describedBy = (fieldOptions.invalid && {describedBy: errorId})
  const { value, ...labelProps } = getFormLabelProps({
    ...fieldOptions,
    htmlFor: id,
    value: props.label,
  })
  const inputProps = getInputProps({
    ...fieldOptions,
    id,
    name: props.name,
    placeholder: props.placeholder,
    size: props.size,
    type: props.type,
    value: props.value,
    ...describedBy
  })
  const error = getErrorMessageProps({
    ...fieldOptions,
    id: errorId,
    message: props.errorMessage
  })

  return (
    <div>
      <label {...labelProps}>{value}</label>
      <div {...inputProps.inputWrapper}>
        <input {...inputProps.input} onChange={props.onChange} />
        {fieldOptions.invalid && (
          <span {...inputProps.invalidIconWrapper}>
            <WarningTriangleFilledIcon
              {...getIconProps(inputProps.invalidIconOptions)}
            />
          </span>
        )}
      </div>
      {fieldOptions.invalid && (
        <div {...error.container}>
          <p {...error.message}>{error.message.value}</p>
        </div>
      )}
    </div>
  );
}`}</CodeBlock>
)

export default inputPreview
