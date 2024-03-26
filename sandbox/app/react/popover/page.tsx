'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { useMemo, type PropsWithChildren } from 'react'
import { vstack } from '@/styled-system/patterns'
import { popover } from '@/styled-system/recipes'

interface PopoverProps {}

// This is a simplified version of the Popover component for recipe testing.
// DO NOT USE THIS COMPONENT AS A CUSTOMIZATION TEMPLATE IN PRODUCTION.
function PopoverRecipe(props: PropsWithChildren<PopoverProps>) {
  const styles = useMemo(() => {
    return popover()
  }, [])

  return (
    <div className={styles.root} {...props}>
      Popover recipe
    </div>
  )
}

export default function PopoverPage() {
  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <div className={vstack({ gap: '2' })}>
          <PopoverRecipe />
        </div>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>React Usage</PageHeading>
        <div className={vstack({ gap: '2' })}>
          {/* After the recipe is created, the React component will be refactored to use it. Include an example of it here. */}
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
