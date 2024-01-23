'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { hstack } from '@/styled-system/patterns'
import { button, iconButton, toast } from '@/styled-system/recipes'
import { CloseIcon, PlaceholderIcon } from '@pluralsight/icons'
import {
  Portal,
  Show,
  createButtonIconProps,
  ToastProvider,
  useToast,
  type ToastPalette,
} from '@pluralsight/react'
import { useMemo, useState } from 'react'

function ToastRecipe(props: {
  palette?: ToastPalette
  onAction?: () => void
  onClose?: () => void
}) {
  const styles = useMemo(() => {
    switch (props.palette) {
      case 'success':
        return toast({ palette: 'success' })
      case 'warning':
        return toast({ palette: 'warning' })
      case 'danger':
        return toast({ palette: 'danger' })
      default:
        return toast()
    }
  }, [props.palette])

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <span className={styles.featureIcon}>
          <PlaceholderIcon height="2.5rem" width="2.5rem" />
        </span>

        <section className={styles.main}>
          <p className={styles.heading}>
            <strong>Toast Heading</strong>
          </p>
          <p>Some description text.</p>
        </section>

        <Show when={Boolean(props.onAction)}>
          <div>
            <button className={styles.undoBtn} onClick={props.onAction}>
              Undo
            </button>
          </div>
        </Show>

        <span className={styles.closeRoot}>
          <button
            className={iconButton({
              palette: props.palette,
              usage: 'text',
              size: 'sm',
            })}
            onClick={props.onClose}
          >
            <CloseIcon {...createButtonIconProps()} />
          </button>
        </span>
      </div>
    </div>
  )
}

function ReactFeature(props: { heading?: string; palette?: ToastPalette }) {
  const { show } = useToast()

  function handleShowToast() {
    show({
      heading: props.heading,
      text: 'Some description text.',
      palette: props.palette ?? 'info',
      onAction: () => console.log('undo'),
      onClose: () => console.log('onClose'),
    })
  }

  return (
    <button className={button()} onClick={handleShowToast}>
      Show Toast
    </button>
  )
}

export default function ToastPage() {
  const [showToast, setShowToast] = useState(false)

  function handleShowToast() {
    setShowToast(true)
  }

  function handleHideToast() {
    setShowToast(false)
  }

  function handleAction() {
    console.log('undo')
  }

  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <button className={button()} onClick={handleShowToast}>
          Show Toast
        </button>

        <Show when={showToast}>
          <Portal>
            <ToastRecipe
              palette="info"
              onAction={handleAction}
              onClose={handleHideToast}
            />
          </Portal>
        </Show>
      </section>

      <section className={css({ mt: '8' })}>
        <PageHeading>React Usage</PageHeading>
        <div className={hstack({ gap: '4' })}>
          <ToastProvider>
            <ReactFeature />
          </ToastProvider>
          <ToastProvider>
            <ReactFeature heading="Item added" palette="success" />
          </ToastProvider>
          <ToastProvider>
            <ReactFeature heading="Configuration changed" palette="warning" />
          </ToastProvider>
          <ToastProvider>
            <ReactFeature heading="Card removed" palette="danger" />
          </ToastProvider>
        </div>
      </section>
    </>
  )
}
