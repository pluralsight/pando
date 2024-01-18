'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { vstack } from '@/styled-system/patterns'
import { textarea } from '@/styled-system/recipes'
import { css } from '@/styled-system/css'
import {
  FormControlProvider,
  Textarea,
  type TextareaProps,
} from '@pluralsight/react'
import { useState, useMemo, type ChangeEvent } from 'react'

function TextareaRecipe(props: TextareaProps) {
  const { pandoSize, ...nativeProps } = props
  const styles = useMemo(() => {
    return pandoSize === 'md' ? textarea({ size: 'md' }) : textarea()
  }, [pandoSize])

  return <textarea className={styles} {...nativeProps} />
}

export default function TextareaPage() {
  const [value, setValue] = useState('')

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.currentTarget.value)
  }

  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <div className={vstack({ gap: '2', maxW: 'prose' })}>
          <TextareaRecipe placeholder="Jane Doe" />
          <TextareaRecipe
            disabled
            onChange={handleChange}
            value={value ?? 'Disabled'}
          />
          <TextareaRecipe readOnly value="Readonly" />
          <TextareaRecipe
            aria-invalid
            onChange={handleChange}
            value={value ?? 'Invalid'}
          />
          <TextareaRecipe placeholder="Jane Doe" pandoSize="md" />
          <TextareaRecipe
            disabled
            onChange={handleChange}
            pandoSize="md"
            value={value ?? 'Disabled'}
          />
          <TextareaRecipe pandoSize="md" readOnly value="Readonly" />
          <TextareaRecipe
            aria-invalid
            onChange={handleChange}
            pandoSize="md"
            value={value ?? 'Invalid'}
          />
        </div>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>React Usage</PageHeading>
        <FormControlProvider>
          <Textarea id="name" name="name" placeholder="Jane Doe" />
        </FormControlProvider>
        <FormControlProvider disabled>
          <Textarea id="name" name="name" placeholder="Disabled" />
        </FormControlProvider>
        <FormControlProvider readOnly>
          <Textarea id="name" name="name" placeholder="Readonly" />
        </FormControlProvider>
        <FormControlProvider invalid>
          <Textarea id="name" name="name" placeholder="Readonly" />
        </FormControlProvider>

        <FormControlProvider>
          <Textarea
            id="name"
            name="name"
            placeholder="Jane Doe"
            pandoSize="md"
          />
        </FormControlProvider>
        <FormControlProvider disabled>
          <Textarea
            id="name"
            name="name"
            placeholder="Disabled"
            pandoSize="md"
          />
        </FormControlProvider>
        <FormControlProvider readOnly>
          <Textarea
            id="name"
            name="name"
            placeholder="Readonly"
            pandoSize="md"
          />
        </FormControlProvider>
        <FormControlProvider invalid>
          <Textarea
            id="name"
            name="name"
            placeholder="Readonly"
            pandoSize="md"
          />
        </FormControlProvider>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>Customized</PageHeading>
        <FormControlProvider>
          <Textarea
            className={css({
              borderWidth: '5px',
              borderColor: 'yellow',
            })}
            id="custom"
            name="custom"
            placeholder="Jane Doe"
          />
        </FormControlProvider>
      </section>
    </>
  )
}
