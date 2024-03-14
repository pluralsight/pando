'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { circularProgress } from '@/styled-system/recipes'
import { getBaseCircleProps, getStrokeProps, VIEWBOX } from '@pluralsight/react'
import { type PropsWithChildren, useMemo } from 'react'
import { vstack } from '@/styled-system/patterns'

interface CircularProgressParams {
  size: 'sm' | 'md'
  cycle: 'determinate' | 'indeterminate'
}

interface CircularProgressProps extends CircularProgressParams {
  displayvalue?: boolean
  label?: string
  now: number
}

// This is a simplified version of the Admonition component for recipe testing.
// DO NOT USE THIS COMPONENT AS A CUSTOMIZATION TEMPLATE IN PRODUCTION.
function CircularProgressRecipe(
  props: PropsWithChildren<CircularProgressProps>,
) {
  const { size, cycle, ...nativeProps } = props
  const styles = useMemo(() => {
    const params: CircularProgressParams = {
      size: size === 'sm' ? 'sm' : 'md',
      cycle: cycle === 'indeterminate' ? 'indeterminate' : 'determinate',
    }
    return circularProgress(params)
  }, [size, cycle])

  return (
    <div>
      <div className={styles.root} {...nativeProps}>
        <svg viewBox={VIEWBOX}>
          <circle className={styles.now} />
          <circle
            {...getBaseCircleProps()}
            {...getStrokeProps(props.now)}
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
            cycle="indeterminate"
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
