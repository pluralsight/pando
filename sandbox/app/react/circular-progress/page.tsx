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
  valueNow?: number
}

// This is a simplified version of the Admonition component for recipe testing.
// DO NOT USE THIS COMPONENT AS A CUSTOMIZATION TEMPLATE IN PRODUCTION.
function CircularProgressRecipe(
  props: PropsWithChildren<CircularProgressProps>,
) {
  const { size, cycle, valueNow, label, ...nativeProps } = props

  const styles = useMemo(() => {
    const params: CircularProgressParams = {
      size: size === 'sm' ? 'sm' : 'md',
      cycle: cycle === 'indeterminate' ? 'indeterminate' : 'determinate',
    }
    return circularProgress(params)
  }, [size, cycle])

  return (
    <div
      role={cycle === 'determinate' ? 'progressbar' : 'status'}
      aria-valuenow={valueNow}
      className={styles.root}
      {...nativeProps}
    >
      <svg viewBox={VIEWBOX}>
        <circle {...getBaseCircleProps()} className={styles.baseCircle} />
        <circle
          {...getBaseCircleProps()}
          {...getStrokeProps(valueNow ?? 0)}
          className={styles.secondaryCircle}
        />
      </svg>
      {size !== 'sm' && <span className={styles.text}>{label}</span>}
    </div>
  )
}

export default function CircularProgressPage() {
  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <div className={vstack({ gap: '2' })}>
          <CircularProgressRecipe size="md" cycle="indeterminate" label="" />
          <CircularProgressRecipe
            size="md"
            valueNow={90}
            cycle="determinate"
            label="90%"
          />
          <CircularProgressRecipe size="sm" cycle="indeterminate" label="" />
          <CircularProgressRecipe
            size="sm"
            valueNow={50}
            cycle="determinate"
            label=""
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
