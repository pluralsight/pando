'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { type PropsWithChildren, useMemo } from 'react'
import { vstack } from '@/styled-system/patterns'
import { select } from '@/styled-system/recipes'

interface SelectProps {}

// This is a simplified version of the Select component for recipe testing.
// DO NOT USE THIS COMPONENT AS A CUSTOMIZATION TEMPLATE IN PRODUCTION.
function SelectRecipe(props: PropsWithChildren<SelectProps>) {
  const styles = useMemo(() => {
    return select()
  }, [])

  return (
    <div className={styles.root} {...props}>
      Select recipe
    </div>
  )
}

export default function SelectPage() {
  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <div className={vstack({ gap: '2' })}>
          <SelectRecipe />
        </div>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>React Usage</PageHeading>
        <div className={vstack({ gap: '2' })}>
          {/* Include Pando React library implementation of recipe */}
        </div>
      </section>
      <section className={css({ my: '4' })}>
        <PageHeading>Custom Usage</PageHeading>
        <div className={vstack({ gap: '2' })}>
          {/* Customize Pando React library implementation of recipe using pandacss */}
        </div>
      </section>
    </>
  )
}
