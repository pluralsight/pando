'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { button, iconButton, toast } from '@/styled-system/recipes'
import { CloseIcon, PlaceholderIcon } from '@pluralsight/icons'
import { type Sentiment } from '@pluralsight/panda-preset'
import { Portal, Show, createButtonIconProps } from '@pluralsight/react'
import { useState } from 'react'

function ToastRecipe(props: {
  palette?: Exclude<Sentiment, 'action' | 'neutral'>
}) {
  const styles = toast({ palette: props.palette })

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <span className={styles.featureIcon}>
          <PlaceholderIcon />
        </span>

        <section className={styles.main}>
          <p className={styles.heading}>
            <strong>Toast Heading</strong>
            <p>Some description text.</p>
          </p>
        </section>

        {/* <Show when={Boolean(onAction)} fallback={null}>
          <div>
            <button {...getToastButtonProps()} onClick={onAction}>
              Undo
            </button>
          </div>
        </Show> */}

        <span className={styles.closeRoot}>
          <button
            className={iconButton({
              palette: props.palette,
              usage: 'text',
              size: 'sm',
            })}
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

  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <button className={button()} onClick={handleShowToast}>
          Show Toast
        </button>

        <Show when={showToast}>
          <Portal>
            <ToastRecipe />
          </Portal>
        </Show>
      </section>
    </>
  )
}
