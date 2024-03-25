'use client'

import { ForwardedRef, RefObject, useMemo, useRef } from 'react'
import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { alertDialog } from '@/styled-system/recipes'
import { vstack } from '@/styled-system/patterns'
import { Button, IconButton, Show } from '@pluralsight/react'
import { CloseIcon, DangerDiamondFilledIcon } from '@pluralsight/react/icons'

// This is a simplified version of the Admonition component for recipe testing.
// DO NOT USE THIS COMPONENT AS A CUSTOMIZATION TEMPLATE IN PRODUCTION.
function AlertDialogRecipe({
  activeRef,
  close,
  content,
  title,
  destructive,
}: {
  activeRef: ForwardedRef<HTMLDialogElement>
  close: () => void
  content: string
  title: string
  destructive?: boolean
}) {
  const styles = useMemo(() => {
    return alertDialog()
  }, [])

  return (
    <dialog role="alertdialog" className={styles.root} ref={activeRef}>
      <header className={styles.header}>
        <Show when={!!destructive}>
          <DangerDiamondFilledIcon className={styles.headerIcon} />
        </Show>
        <strong>{title}</strong>
      </header>
      <IconButton
        className={styles.closeButton}
        usage="text"
        ariaLabel="close"
        onClick={close}
      >
        <CloseIcon />
      </IconButton>
      <div className={styles.bodyContent}>{content}</div>
      <footer className={styles.footer}>
        <Button onClick={close}>Button</Button>
        <Button onClick={close}>Button</Button>
      </footer>
    </dialog>
  )
}

export default function AlertDialogPage() {
  const maxWidthRef = useRef<HTMLDialogElement>(null)
  const minWidthRef = useRef<HTMLDialogElement>(null)
  const hugsContentRef = useRef<HTMLDialogElement>(null)
  const destructiveRef = useRef<HTMLDialogElement>(null)

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
        <div className={vstack({ gap: '2' })}>
          <Button onClick={() => handleShowModal(maxWidthRef)}>
            Show max-width modal
          </Button>
          <AlertDialogRecipe
            close={() => {
              handleCloseModal(maxWidthRef)
            }}
            activeRef={maxWidthRef}
            title={'Hits maximum width'}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur."
          />

          <Button onClick={() => handleShowModal(minWidthRef)}>
            Show min-width modal
          </Button>
          <AlertDialogRecipe
            close={() => {
              handleCloseModal(minWidthRef)
            }}
            activeRef={minWidthRef}
            title={'Hits minimum width'}
            content="Very little content"
          />

          <Button onClick={() => handleShowModal(hugsContentRef)}>
            Show hugs-content modal
          </Button>
          <AlertDialogRecipe
            close={() => {
              handleCloseModal(hugsContentRef)
            }}
            activeRef={hugsContentRef}
            title={'Modal hugs content'}
            content="Modal width will hug content till it reaches max width"
          />

          <Button onClick={() => handleShowModal(destructiveRef)}>
            Show destructive modal
          </Button>
          <AlertDialogRecipe
            close={() => {
              handleCloseModal(destructiveRef)
            }}
            activeRef={destructiveRef}
            title={'Destructive Modal'}
            content="Modal which carries out a destructive action will have a warning icon in the title"
            destructive
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
