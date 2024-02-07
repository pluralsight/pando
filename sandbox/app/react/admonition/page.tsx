'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { admonition, iconButton } from '@/styled-system/recipes'
import {
  Show,
  createButtonIconProps,
  Admonition,
  AdmonitionHeading,
  AdmonitionText,
} from '@pluralsight/react'
import { PlaceholderIcon, CloseIcon } from '@pluralsight/react/icons'
import { type PropsWithChildren, useMemo } from 'react'
import { vstack } from '@/styled-system/patterns'

interface AdmonitionProps {
  heading: string
  description: string
  palette?: 'info' | 'warning' | 'danger' | 'success'
  onClose?: () => void
}

// This is a simplified version of the Admonition component for recipe testing.
// DO NOT USE THIS COMPONENT AS A CUSTOMIZATION TEMPLATE IN PRODUCTION.
function AdmonitionRecipe(props: PropsWithChildren<AdmonitionProps>) {
  const styles = useMemo(() => {
    switch (props.palette) {
      case 'success':
        return admonition({ palette: 'success' })
      case 'warning':
        return admonition({ palette: 'warning' })
      case 'danger':
        return admonition({ palette: 'danger' })
      default:
        return admonition()
    }
  }, [props.palette])

  return (
    <div className={styles.root}>
      <span className={styles.featureIcon}>
        <PlaceholderIcon />
      </span>

      <div className={styles.main}>
        <p className={styles.heading}>
          <strong>{props.heading}</strong>
        </p>
        <small className={styles.description}>{props.description}</small>
      </div>

      <Show when={Boolean(props.onClose)}>
        <button
          className={iconButton({ usage: 'text', palette: props.palette })}
        >
          <CloseIcon {...createButtonIconProps()} />
        </button>
      </Show>
    </div>
  )
}

export default function FieldMessagePage() {
  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <div className={vstack({ gap: '2' })}>
          <AdmonitionRecipe
            heading="Info Heading"
            description="Some description text."
            palette="info"
          />
          <AdmonitionRecipe
            heading="Success Heading"
            description="Some description text."
            palette="success"
          />
          <AdmonitionRecipe
            heading="Warning Heading"
            description="Some description text."
            palette="warning"
            onClose={() => console.log('close')}
          />
          <AdmonitionRecipe
            heading="Danger Heading"
            description="Some description text."
            palette="danger"
            onClose={() => console.log('close')}
          />
        </div>
      </section>
      z
      <section className={css({ my: '4' })}>
        <PageHeading>React Usage</PageHeading>
        <div className={vstack({ gap: '2' })}>
          <Admonition>
            <AdmonitionHeading>Info Heading</AdmonitionHeading>
            <AdmonitionText>Some description text.</AdmonitionText>
          </Admonition>
          <Admonition palette="success">
            <AdmonitionHeading>Success Heading</AdmonitionHeading>
            <AdmonitionText>Some description text.</AdmonitionText>
          </Admonition>
          <Admonition palette="warning" onClose={() => console.log('close')}>
            <AdmonitionHeading>Warning Heading</AdmonitionHeading>
            <AdmonitionText>Some description text.</AdmonitionText>
          </Admonition>
          <Admonition palette="danger" onClose={() => console.log('close')}>
            <AdmonitionHeading>Danger Heading</AdmonitionHeading>
            <AdmonitionText>Some description text.</AdmonitionText>
          </Admonition>
        </div>
      </section>
      <section className={css({ my: '4' })}>
        <PageHeading>Custom Usage</PageHeading>
      </section>
    </>
  )
}
