'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { useMemo, type PropsWithChildren } from 'react'
import { vstack } from '@/styled-system/patterns'
import { menu } from '@/styled-system/recipes'

interface MenuProps {}

// This is a simplified version of the Menu component for recipe testing.
// DO NOT USE THIS COMPONENT AS A CUSTOMIZATION TEMPLATE IN PRODUCTION.
function MenuRecipe(props: PropsWithChildren<MenuProps>) {
  const styles = useMemo(() => {
    return menu()
  }, [])

  return (
    <div className={styles.root} {...props}>
      Menu recipe
    </div>
  )
}

export default function MenuPage() {
  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <div className={vstack({ gap: '2' })}>
          <MenuRecipe />
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
