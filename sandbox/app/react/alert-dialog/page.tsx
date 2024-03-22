'use client'

import { ForwardedRef, RefObject, useMemo, useRef } from 'react'
import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { alertDialog } from '@/styled-system/recipes'
import { vstack } from '@/styled-system/patterns'
import { Button } from '@pluralsight/react'

// This is a simplified version of the Admonition component for recipe testing.
// DO NOT USE THIS COMPONENT AS A CUSTOMIZATION TEMPLATE IN PRODUCTION.
function AlertDialogRecipe({
  activeRef,
  close,
}: {
  activeRef: ForwardedRef<HTMLDialogElement>
  close: () => void
}) {
  const styles = useMemo(() => {
    return alertDialog()
  }, [])

  return (
    <dialog className={styles.root} ref={activeRef}>
      <header className={styles.header}>Header content</header>
      <div className={styles.popover}>Body content</div>
      <footer className={styles.footer}>footer content</footer>
      <Button onClick={close}>Close</Button>
    </dialog>
  )
}

export default function AlertDialogPage() {
  const dialogRef = useRef<HTMLDialogElement>(null)

  function handleShowModal(ref: RefObject<HTMLDialogElement>) {
    ref.current?.showModal()
  }

  function handleCloseModal(ref: RefObject<HTMLDialogElement>) {
    ref.current?.close()
  }

  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <Button onClick={() => handleShowModal(dialogRef)}>Show modal</Button>
        <div className={vstack({ gap: '2' })}>
          <AlertDialogRecipe
            close={() => {
              handleCloseModal(dialogRef)
            }}
            activeRef={dialogRef}
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
