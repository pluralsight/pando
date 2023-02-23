import React from 'react'
import * as tokenValues from '@pluralsight/design-tokens/meta/cssProperties'
import tokenData from '@pluralsight/design-tokens/meta/normalize.json'
import styles from './TokensColorMap.module.css'

function ColorSection(props) {
  const { sentiment } = props
  const tokens = tokenData.groups[sentiment]
  const tokenList = Object.keys(tokens)

  return (
    <section className={styles.colorGroup}>
      <ul className={styles.list}>
        {tokenList.map((color) => (
          <ColorItem
            {...tokens[color]}
            key={tokens[color].id}
            sentiment={sentiment}
          />
        ))}
      </ul>
    </section>
  )
}

function ColorItem(props) {
  return (
    <li className={styles.item}>
      <ColorSwab {...props} />

      <div className={styles.labelcontainer}>
        <ColorInfo label="CSS">{props.cssName}</ColorInfo>
        <ColorInfo label="SASS">{props.sassName}</ColorInfo>
        <ColorInfo label="JS">{props.jsName}</ColorInfo>
      </div>
    </li>
  )
}

function ColorInfo(props) {
  return (
    <small className={styles.colorInfo}>
      <span className={styles.syntax}>{props.label}:</span>
      <code className={styles.code}>{props.children}</code>
    </small>
  )
}

function ColorSwab(props) {
  const { sentiment } = props
  const formattedSentiment = sentiment === 'default' ? '' : sentiment
  const jsSentimentName = `ps${formattedSentiment
    .charAt(0)
    .toUpperCase()}${formattedSentiment.slice(1)}`

  return (
    <div
      className={styles.swab}
      style={{
        backgroundColor: tokenValues[props.jsName],
      }}
    >
      <code
        className={styles.hexValue}
        style={{
          backgroundColor:
            tokenValues[`${jsSentimentName}Background`] ??
            tokenValues[`${jsSentimentName}Surface`],
          color: tokenValues[`${jsSentimentName}Text`],
        }}
      >
        {props.value}
      </code>
    </div>
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
