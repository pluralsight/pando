'use client'

import { useMemo, useRef } from 'react'
import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { alertDialog } from '@/styled-system/recipes'
import { vstack } from '@/styled-system/patterns'
import { Button } from '@pluralsight/react'

// This is a simplified version of the Admonition component for recipe testing.
// DO NOT USE THIS COMPONENT AS A CUSTOMIZATION TEMPLATE IN PRODUCTION.

export default function AlertDialogPage() {
  const dialogRef = useRef<HTMLDialogElement>(null)

  function handleShowModal() {
    dialogRef.current?.showModal()
  }

  function handleCloseModal() {
    dialogRef.current?.close()
  }

  const styles = useMemo(() => {
    return alertDialog()
  }, [])

  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <Button onClick={handleShowModal}>Show modal</Button>
        <div className={vstack({ gap: '2' })}>
          <div>
            <dialog className={styles.root} ref={dialogRef}>
              <header className={styles.header}>Header content</header>
              <div className={styles.popover}>Body content</div>
              <footer className={styles.footer}>footer content</footer>
              <button onClick={handleCloseModal}>Close</button>
            </dialog>
          </div>
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
