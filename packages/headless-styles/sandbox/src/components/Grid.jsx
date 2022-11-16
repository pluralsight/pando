import { useEffect } from 'react'
import {
  getGridProps,
  getGridItemProps,
  getJSGridProps,
  getJSGridItemProps,
} from '../../../src'

function getGridItemStyles(options) {
  const styles = getGridItemProps(options)

  return {
    style: {
      ...styles.style,
      backgroundColor: 'var(--ps-surface-strong)',
      borderRadius: '6px',
      marginBottom: '1rem',
    },
  }
}

function TwoColLayout() {
  return (
    <div {...getGridProps({ cols: 12, gap: 32 })}>
      <Feature />
      <Sidebar />
    </div>
  )
}

function Feature() {
  return (
    <div
      {...getGridItemProps({
        colSpan: 9,
      })}
    >
      <ContentCard height="13rem" />
      <ContentCard height="13rem" />
      <ContentCard height="13rem" />
      <ContentCard height="13rem" />
    </div>
  )
}

function Sidebar() {
  return (
    <div
      {...getGridItemProps({
        colSpan: 3,
      })}
    >
      <ContentCard height="13rem" />
      <ContentCard height="10rem" />
      <ContentCard height="16rem" />
      <ContentCard height="6rem" />
    </div>
  )
}

function ContentCard({ height }) {
  return (
    <div {...getGridItemStyles()}>
      <div style={{ height }}>content</div>
    </div>
  )
}

export default function Grid({ logJS }) {
  useEffect(() => {
    if (logJS) {
      console.log({ ...getJSGridProps() })
      console.log({ ...getJSGridItemProps() })
    }
  }, [logJS])

  return (
    <div>
      <h3>Grid</h3>
      <div className="App-container">
        <TwoColLayout />
      </div>
    </div>
  )
}
