'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { vstack } from '@/styled-system/patterns'
import { textarea } from '@/styled-system/recipes'
import { css } from '@/styled-system/css'
import { PlaceholderIcon } from '@pluralsight/icons'
import { Input, FormControlProvider } from '@pluralsight/react'
import {
  useState,
  useMemo,
  type ChangeEvent,
  type TextareaHTMLAttributes,
} from 'react'
import { createInputIconProps } from '@pluralsight/react/src/helpers/input.helpers'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  pandoSize?: 'md' | 'lg'
}

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
          <Input id="name" name="name" placeholder="Jane Doe" />
        </FormControlProvider>
        <FormControlProvider disabled>
          <Input id="name" name="name" placeholder="Disabled" />
        </FormControlProvider>
        <FormControlProvider readOnly>
          <Input id="name" name="name" placeholder="Readonly" />
        </FormControlProvider>
        <FormControlProvider invalid>
          <Input id="name" name="name" placeholder="Readonly" />
        </FormControlProvider>

        <FormControlProvider>
          <Input id="name" name="name" placeholder="Jane Doe" pandoSize="md" />
        </FormControlProvider>
        <FormControlProvider disabled>
          <Input id="name" name="name" placeholder="Disabled" pandoSize="md" />
        </FormControlProvider>
        <FormControlProvider readOnly>
          <Input id="name" name="name" placeholder="Readonly" pandoSize="md" />
        </FormControlProvider>
        <FormControlProvider invalid>
          <Input id="name" name="name" placeholder="Readonly" pandoSize="md" />
        </FormControlProvider>
      </section>

      <section>
        <PageHeading>With StartIcon</PageHeading>
        <FormControlProvider>
          <Input
            id="name"
            name="name"
            placeholder="Jane Doe"
            startIcon={<PlaceholderIcon {...createInputIconProps()} />}
          />
        </FormControlProvider>
        <FormControlProvider>
          <Input
            id="name"
            name="name"
            pandoSize="md"
            placeholder="Jane Doe"
            startIcon={
              <PlaceholderIcon
                {...createInputIconProps({
                  pandoSize: 'md',
                })}
              />
            }
          />
        </FormControlProvider>
      </section>
    </>
  )
}
