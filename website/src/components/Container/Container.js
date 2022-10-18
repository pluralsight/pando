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
  const classes = styles[props.type]

  return (
    <div
      className={classes}
      style={{
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        textAlign: props.textAlign ?? 'center',
        gridTemplateColumns:
          props.columnCount && `repeat(${props.gridColumns}, 1fr)`,
      }}
    >
      {props.children}
    </div>
  )
}
