'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { vstack } from '@/styled-system/patterns'
import { input } from '@/styled-system/recipes'
import { cx } from '@/styled-system/css'
import { PlaceholderIcon } from '@pluralsight/icons'
import {
  type CreateButtonIconOptions,
  Show,
  createButtonIconProps,
} from '@pluralsight/react'
import {
  type ChangeEvent,
  useState,
  type InputHTMLAttributes,
  useMemo,
} from 'react'

function TempButtonIcon(props: CreateButtonIconOptions) {
  return (
    <PlaceholderIcon
      {...createButtonIconProps({ height: props.height, width: props.width })}
    />
  )
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  pandoSize?: 'md' | 'lg'
  showIcon?: boolean
}

function InputRecipe(props: InputProps) {
  const { pandoSize, showIcon, ...nativeProps } = props
  const styles = useMemo(() => {
    return pandoSize === 'md' ? input({ size: 'md' }) : input()
  }, [pandoSize])
  const iconSize = useMemo(
    () => (pandoSize === 'md' ? '1rem' : '1.5rem'),
    [pandoSize],
  )

  return (
    <div className={styles.root}>
      <input className={cx('peer', styles.control)} {...nativeProps} />

      <Show when={showIcon ?? false}>
        <span className={styles.icon}>
          <TempButtonIcon height={iconSize} width={iconSize} />
        </span>
      </Show>
    </div>
  )
}

export default function ButtonPage() {
  const [value, setValue] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value)
  }

  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <div className={vstack({ gap: '2', maxW: '60ch' })}>
          <InputRecipe placeholder="Jane Doe" />
          <InputRecipe
            disabled
            onChange={handleChange}
            showIcon
            value={value ?? 'Disabled'}
          />
          <InputRecipe readOnly value="Readonly" />
          <InputRecipe
            aria-invalid
            onChange={handleChange}
            showIcon
            value={value ?? 'Invalid'}
          />
          <InputRecipe placeholder="Jane Doe" pandoSize="md" />
          <InputRecipe
            disabled
            onChange={handleChange}
            pandoSize="md"
            showIcon
            value={value ?? 'Disabled'}
          />
          <InputRecipe pandoSize="md" readOnly value="Readonly" />
          <InputRecipe
            aria-invalid
            onChange={handleChange}
            pandoSize="md"
            showIcon
            value={value ?? 'Invalid'}
          />
        </div>
      </section>
    </>
  )
}
