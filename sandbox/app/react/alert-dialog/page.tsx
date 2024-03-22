'use client'

import { ForwardedRef, RefObject, useMemo, useRef } from 'react'
import { PageHeading } from '@/app/components/typography/PageHeading'
import { css, cx } from '@/styled-system/css'
import { alertDialog } from '@/styled-system/recipes'
import { vstack } from '@/styled-system/patterns'
import { Button, IconButton } from '@pluralsight/react'
import { CloseIcon } from '@pluralsight/react/icons'

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
      <header className={styles.header}>
        <strong>Header content</strong>
      </header>
      <IconButton
        className={styles.iconButtonWrapper}
        usage="text"
        ariaLabel="close"
        onClick={close}
      >
        <CloseIcon />
      </IconButton>
      <div className={styles.popover}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <footer
        className={cx(
          styles.footer,
          css({ display: 'flex', justifyContent: 'flex-end' }),
        )}
      >
        <Button onClick={close}>Close</Button>
      </footer>
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
