import React from 'react'
import * as tokenValues from '@pluralsight/design-tokens/meta/cssProperties'
import tokenData from '@pluralsight/design-tokens/meta/normalize.json'
import styles from './TokensColorMap.module.css'

function Label(props) {
  return <p className={styles.label}>{props.children}</p>
}

function ColorSection(props) {
  const tokens = tokenData.groups[props.sentiment]
  const tokenList = Object.keys(tokens)

  return (
    <section className={styles.colorGroup}>
      <ul className={styles.list}>
        {tokenList.map((color) => (
          <ColorItem {...tokens[color]} key={tokens[color].id} />
        ))}
      </ul>
    </section>
  )
}

function ColorItem(props) {
  return (
    <li className={styles.item}>
      <div
        className={styles.swab}
        style={{
          backgroundColor: tokenValues[props.jsName],
        }}
      />
      <div className={styles.labelcontainer}>
        <Label>
          <span className={styles.syntax}>CSS:</span> {props.cssName}
        </Label>
        <Label>
          <span className={styles.syntax}>SASS:</span> {props.sassName}
        </Label>
        <Label>
          <span className={styles.syntax}>JS:</span> {props.jsName}
        </Label>
      </div>
    </li>
  )
}

function TokensColorMap(props) {
  return (
    <div>
      <ColorSection sentiment={props.sentiment} />
    </div>
  )
}

export default TokensColorMap
