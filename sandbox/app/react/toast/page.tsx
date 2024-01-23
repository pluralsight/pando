'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { button, iconButton, toast } from '@/styled-system/recipes'
import { CloseIcon, PlaceholderIcon } from '@pluralsight/icons'
import { type Sentiment } from '@pluralsight/panda-preset'
import { Portal, Show, createButtonIconProps } from '@pluralsight/react'
import { useMemo, useState } from 'react'

function ToastRecipe(props: {
  palette?: Exclude<Sentiment, 'action' | 'neutral'>
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
            <p>Some description text.</p>
          </p>
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
    </>
  )
}
