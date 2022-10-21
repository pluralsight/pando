import React from 'react'
import styles from './Container.module.css'

const defaultProps = {
  alignItems: 'center',
  column: false,
  gridCols: 0,
  justifyContent: 'space-between',
  textAlign: 'center',
  type: 'base',
}

export default function Container(props = defaultProps) {
  const type = props.type ?? defaultProps.type
  const gridCols = props.gridColumns
    ? `repeat(${props.gridColumns}, minmax(auto, max-content))`
    : 'initial'

  const defaultStyles = {
    alignItems: props.alignItems,
    gridTemplateColumns: gridCols,
    justifyContent: props.justifyContent,
    textAlign: props.textAlign ?? 'center',
  }

  return (
    <div className={styles[type]} style={defaultStyles}>
      {props.children}
    </div>
  )
}
