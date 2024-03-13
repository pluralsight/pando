'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
// import { circularProgress } from '@/styled-system/recipes'
import { getBaseCircleProps, getStrokeProps, VIEWBOX } from '@pluralsight/react'
import { type PropsWithChildren } from 'react'
import { vstack } from '@/styled-system/patterns'

interface CircularProgressProps {
  size: 'sm' | 'md'
  duration: 'determinate' | 'indeterminate'
  displayValue?: boolean
}

// This is a simplified version of the Admonition component for recipe testing.
// DO NOT USE THIS COMPONENT AS A CUSTOMIZATION TEMPLATE IN PRODUCTION.
function CircularProgressRecipe(
  props: PropsWithChildren<CircularProgressProps>,
) {
  return (
    <div>
      <div>
        <svg viewBox={VIEWBOX}>
          <circle {...getBaseCircleProps()} />
          <circle {...getStrokeProps(50)} />
        </svg>
        {props.displayValue && props.size !== 'sm' && <span>shrug</span>}
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
          <CircularProgressRecipe size="md" duration="determinate" />
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
