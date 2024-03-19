'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { circularProgress } from '@/styled-system/recipes'
import {
  CircularProgress,
  getBaseCircleProps,
  getStrokeProps,
  VIEWBOX,
} from '@pluralsight/react'
import { type PropsWithChildren, useMemo } from 'react'
import { vstack } from '@/styled-system/patterns'

interface CircularProgressParams {
  size: 'sm' | 'md'
  cycle: 'determinate' | 'indeterminate'
}

interface CircularProgressProps extends CircularProgressParams {
  displayValue?: boolean
  label?: string
  valuenow?: number
}

// This is a simplified version of the Admonition component for recipe testing.
// DO NOT USE THIS COMPONENT AS A CUSTOMIZATION TEMPLATE IN PRODUCTION.
function CircularProgressRecipe(
  props: PropsWithChildren<CircularProgressProps>,
) {
  const { size, cycle, valuenow = 0, displayValue, ...nativeProps } = props

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
      aria-valuenow={valuenow}
      className={styles.root}
      {...nativeProps}
    >
      <svg viewBox={VIEWBOX}>
        <circle {...getBaseCircleProps()} className={styles.baseCircle} />
        <circle
          {...getBaseCircleProps()}
          {...getStrokeProps(valuenow ?? 0)}
          className={styles.progressCircle}
        />
      </svg>
      {size !== 'sm' && !!displayValue && (
        <span className={styles.text}>{`${valuenow}%`}</span>
      )}
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
            valuenow={90}
            displayValue
            cycle="determinate"
          />
          <CircularProgressRecipe size="sm" cycle="indeterminate" label="" />
          <CircularProgressRecipe size="sm" valuenow={50} cycle="determinate" />
        </div>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>React Usage</PageHeading>
        <div className={vstack({ gap: '2' })}>
          <CircularProgress
            ariaLabel="circular progress"
            size="md"
            cycle="indeterminate"
          />
          <CircularProgress
            ariaLabel="circular progress"
            size="md"
            cycle="determinate"
            valuenow={90}
            displayValue
          />
          <CircularProgress
            ariaLabel="circular progress"
            size="sm"
            cycle="indeterminate"
          />
          <CircularProgress
            ariaLabel="circular progress"
            size="sm"
            cycle="determinate"
            valuenow={50}
          />
        </div>
      </section>
      <section className={css({ my: '4' })}>
        <PageHeading>Custom Usage</PageHeading>
        <div className={vstack({ gap: '2' })}>
          <CircularProgress
            ariaLabel="circular progress"
            valuenow={50}
            cycle="indeterminate"
            className={css({
              w: 'sm',
            })}
          />
        </div>
      </section>
    </>
  )
}
