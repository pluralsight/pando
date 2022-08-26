import React from 'react'
import styles from './Container.module.css'

const defaultProps = {
  alignItems: 'center',
  column: false,
  justifyContent: 'space-between',
  textAlign: 'center',
}

export default function Container(props = defaultProps) {
  const classes = props.column ? styles.column : styles.base
  return (
    <div
      className={classes}
      style={{
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        textAlign: props.textAlign ?? 'center',
      }}
    >
      {props.children}
    </div>
  )
}
