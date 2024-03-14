'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { circularProgress } from '@/styled-system/recipes'
import { getBaseCircleProps, getStrokeProps, VIEWBOX } from '@pluralsight/react'
import { type PropsWithChildren, useMemo } from 'react'
import { vstack } from '@/styled-system/patterns'

interface CircularProgressProps {
  size: 'sm' | 'md'
  duration: 'determinate' | 'indeterminate'
  displayvalue?: boolean
  label?: string
  now: number
}

// This is a simplified version of the Admonition component for recipe testing.
// DO NOT USE THIS COMPONENT AS A CUSTOMIZATION TEMPLATE IN PRODUCTION.
function CircularProgressRecipe(
  props: PropsWithChildren<CircularProgressProps>,
) {
  const { size, ...nativeProps } = props
  const styles = useMemo(() => {
    switch (size) {
      case 'sm':
        return circularProgress({ size: 'sm', duration: 'indeterminate' })
      case 'md':
        return circularProgress({ size: 'md', duration: 'indeterminate' })
      default:
        return circularProgress({ size: 'md', duration: 'indeterminate' })
    }
  }, [size])

  const strokeProps = getStrokeProps(props.now)

  console.log('strokeProps', strokeProps)

  return (
    <div>
      <div className={styles.root} {...nativeProps}>
        <svg viewBox={VIEWBOX}>
          <circle {...strokeProps} className={styles.now} />
          <circle
            {...getBaseCircleProps()}
            {...strokeProps}
            className={styles.circle}
          />
        </svg>
        {props.size !== 'sm' && (
          <span className={styles.text}>{props.label}</span>
        )}
      </div>
    </div>
  )
}

export default function CircularProgressPage() {
  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <div className={vstack({ gap: '2' })}>
          <CircularProgressRecipe
            size="md"
            now={25}
            duration="determinate"
            label="25%"
          />
        </div>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>React Usage</PageHeading>
      </section>
      <section className={css({ my: '4' })}>
        <PageHeading>Custom Usage</PageHeading>
      </section>
    </>
  )
}
