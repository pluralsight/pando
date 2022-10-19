import React from 'react'
import styles from './Container.module.css'

const defaultProps = {
  alignItems: 'center',
  column: false,
  justifyContent: 'space-between',
  textAlign: 'center',
  type: 'base',
}

export default function Container(props = defaultProps) {
  const type = props.type ?? defaultProps.type

  return (
    <div
      className={styles[type]}
      style={{
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        textAlign: props.textAlign ?? 'center',
        gridTemplateColumns:
          props.gridColumns &&
          `repeat(${props.gridColumns}, minmax(auto, max-content))`,
      }}
    >
      {props.children}
    </div>
  )
}
