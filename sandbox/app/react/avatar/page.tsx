/* eslint-disable @next/next/no-img-element */
'use client'

import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { avatar } from '@/styled-system/recipes'
import { Show, Avatar } from '@pluralsight/react'
import { PersonIcon } from '@pluralsight/react/icons'
import { type PropsWithChildren, useMemo } from 'react'
import { hstack } from '@/styled-system/patterns'
import Image from 'next/image'

const iconSizeMap = {
  xs: '1.5rem',
  sm: '2.5rem',
  md: '4rem',
  lg: '6rem',
  xl: '8rem',
}

interface AvatarProps {
  src?: string
  name?: string
  palette?: 'neutral' | 'action'
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

function NextImage(props: AvatarProps) {
  const { size } = props
  return (
    <Show
      when={process.env.NODE_ENV === 'test'}
      fallback={
        <Image
          alt={props.name ?? 'avatar'}
          className={avatar({ palette: props.palette, size: props.size }).image}
          src={props.src ?? ''}
          height={300}
          width={300}
        />
      }
    >
      <img
        alt={props.name}
        className={avatar({ palette: props.palette, size: props.size }).image}
        height={iconSizeMap[size]}
        src={props.src}
        width={iconSizeMap[size]}
      />
    </Show>
  )
}

// This is a simplified version of the Avatar component for recipe testing.
// DO NOT USE THIS COMPONENT AS A CUSTOMIZATION TEMPLATE IN PRODUCTION.
function AvatarRecipe(props: PropsWithChildren<AvatarProps>) {
  const { size, ...nativeProps } = props
  const styles = useMemo(() => {
    switch (size) {
      case 'xs':
        return avatar({ palette: 'neutral', size: 'xs' })
      case 'sm':
        return avatar({ palette: 'action', size: 'sm' })
      case 'lg':
        return avatar({ palette: 'neutral', size: 'lg' })
      case 'xl':
        return avatar({ palette: 'action', size: 'xl' })
      default:
        return avatar({ palette: 'neutral', size: 'md' })
    }
  }, [size])

  return (
    <span className={styles.root} {...nativeProps}>
      <Show
        when={Boolean(props.name)}
        fallback={
          <PersonIcon
            aria-hidden="true"
            height={iconSizeMap[size]}
            width={iconSizeMap[size]}
          />
        }
      >
        <Show
          when={Boolean(props.src)}
          fallback={
            <span className={styles.label}>{props.name?.charAt(0) ?? 'U'}</span>
          }
        >
          <NextImage {...props} size={size} />
        </Show>
      </Show>
    </span>
  )
}

export default function AvatarPage() {
  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <div className={hstack({ gap: '2', my: '2' })}>
          <AvatarRecipe name="John Doe" size="xs" />
          <AvatarRecipe name="Tim Doe" size="sm" />
          <AvatarRecipe name="Xo Doe" size="md" />
          <AvatarRecipe name="Bo Doe" size="lg" />
          <AvatarRecipe name="X" size="xl" />
        </div>
        <div className={hstack({ gap: '2', my: '2' })}>
          <AvatarRecipe src="https://i.pravatar.cc/300" size="xs" />
          <AvatarRecipe src="https://i.pravatar.cc/300" size="sm" />
          <AvatarRecipe src="https://i.pravatar.cc/300" size="md" />
          <AvatarRecipe src="https://i.pravatar.cc/300" size="lg" />
          <AvatarRecipe src="https://i.pravatar.cc/300" size="xl" />
        </div>
        <div className={hstack({ gap: '2', my: '2' })}>
          <AvatarRecipe
            src="https://i.pravatar.cc/300"
            name="John Doe"
            size="xs"
          />
          <AvatarRecipe
            src="https://i.pravatar.cc/300"
            name="John Doe"
            size="sm"
          />
          <AvatarRecipe
            src="https://i.pravatar.cc/300"
            name="John Doe"
            size="md"
          />
          <AvatarRecipe
            src="https://i.pravatar.cc/300"
            name="John Doe"
            size="lg"
          />
          <AvatarRecipe
            src="https://i.pravatar.cc/300"
            name="John Doe"
            size="xl"
          />
        </div>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>React Usage</PageHeading>
        <div className={hstack({ gap: '2' })}>
          <Avatar size="xs" />
          <Avatar size="sm" />
          <Avatar size="md" />
          <Avatar palette="action" size="lg" />
          <Avatar palette="action" size="xl" />
        </div>
        <div className={hstack({ gap: '2', my: '2' })}>
          <Avatar label="Jane Doe" size="xs" />
          <Avatar label="X" size="sm" />
          <Avatar label="John Doe" size="md" />
          <Avatar label="ZZ" palette="action" size="lg" />
          <Avatar label="Wonka" palette="action" size="xl" />
        </div>
        <div className={hstack({ gap: '2', my: '2' })}>
          <Avatar src="https://i.pravatar.cc/300" label="Jane Doe" size="xs" />
          <Avatar src="https://i.pravatar.cc/300" label="X" size="sm" />
          <Avatar src="https://i.pravatar.cc/300" label="John Doe" size="md" />
          <Avatar
            src="https://i.pravatar.cc/300"
            label="ZZ"
            palette="action"
            size="lg"
          />
          <Avatar
            src="https://i.pravatar.cc/300"
            label="Wonka"
            palette="action"
            size="xl"
          />
        </div>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>Custom Usage</PageHeading>
        <div className={hstack({ gap: '2', my: '2' })}>
          <Avatar
            className={css({
              borderRadius: 'none',
            })}
            src="https://i.pravatar.cc/300"
            label="Jane Doe"
            size="xs"
          />

          <Avatar
            img={
              <NextImage
                src="https://i.pravatar.cc/300"
                name="John Doe"
                size="sm"
              />
            }
            label="X"
            size="sm"
          />
        </div>
      </section>
    </>
  )
}
