import { PageHeading } from '@/app/components/typography/PageHeading'
import { css } from '@/styled-system/css'
import { hstack } from '@/styled-system/patterns'
import { badge } from '@/styled-system/recipes'
import { Show, createBadgeIconProps, Badge } from '@pluralsight/react'
import { PlaceholderIcon } from '@pluralsight/react/icons'
import type { HTMLAttributes } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  icon?: boolean
}

// This is a simplified version of the Badge component for recipe testing.
// DO NOT USE THIS COMPONENT AS A CUSTOMIZATION TEMPLATE IN PRODUCTION.
function BadgeRecipe(props: BadgeProps) {
  const { icon = false } = props
  return (
    <span className={props.className}>
      <Show when={icon}>
        <PlaceholderIcon {...createBadgeIconProps()} />
      </Show>
      label
    </span>
  )
}

export default function BadgePage() {
  return (
    <>
      <section>
        <PageHeading>Recipe Usage</PageHeading>
        <div
          className={hstack({
            gap: '4',
          })}
        >
          <BadgeRecipe icon className={badge({ palette: 'neutral' })} />
          <BadgeRecipe icon className={badge({ palette: 'info' })} />
          <BadgeRecipe icon className={badge({ palette: 'success' })} />
          <BadgeRecipe icon className={badge({ palette: 'warning' })} />
          <BadgeRecipe icon className={badge({ palette: 'danger' })} />
        </div>
        <div
          className={hstack({
            gap: '4',
            mt: '2',
          })}
        >
          <BadgeRecipe
            icon
            className={badge({ palette: 'neutral', usage: 'outline' })}
          />
          <BadgeRecipe
            icon
            className={badge({ palette: 'info', usage: 'outline' })}
          />
          <BadgeRecipe
            icon
            className={badge({ palette: 'success', usage: 'outline' })}
          />
          <BadgeRecipe
            icon
            className={badge({ palette: 'warning', usage: 'outline' })}
          />
          <BadgeRecipe
            icon
            className={badge({ palette: 'danger', usage: 'outline' })}
          />
        </div>
        <div
          className={hstack({
            gap: '4',
            mt: '4',
          })}
        >
          <BadgeRecipe
            className={badge({
              palette: 'neutral',
              size: 'md',
            })}
          />
          <BadgeRecipe
            className={badge({
              palette: 'info',
              size: 'md',
            })}
          />
          <BadgeRecipe
            className={badge({
              palette: 'success',
              size: 'md',
            })}
          />
          <BadgeRecipe
            className={badge({
              palette: 'warning',
              size: 'md',
            })}
          />
          <BadgeRecipe
            className={badge({
              palette: 'danger',
              size: 'md',
            })}
          />
        </div>
        <div
          className={hstack({
            gap: '4',
            mt: '2',
          })}
        >
          <BadgeRecipe
            className={badge({
              palette: 'neutral',
              usage: 'outline',
              size: 'md',
            })}
          />
          <BadgeRecipe
            className={badge({
              palette: 'info',
              usage: 'outline',
              size: 'md',
            })}
          />
          <BadgeRecipe
            className={badge({
              palette: 'success',
              usage: 'outline',
              size: 'md',
            })}
          />
          <BadgeRecipe
            className={badge({
              palette: 'warning',
              usage: 'outline',
              size: 'md',
            })}
          />
          <BadgeRecipe
            className={badge({
              palette: 'danger',
              usage: 'outline',
              size: 'md',
            })}
          />
        </div>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>React Usage</PageHeading>
        <div
          className={hstack({
            gap: '4',
          })}
        >
          <Badge
            palette="neutral"
            startIcon={<PlaceholderIcon {...createBadgeIconProps()} />}
          >
            Label
          </Badge>
          <Badge
            palette="info"
            startIcon={<PlaceholderIcon {...createBadgeIconProps()} />}
          >
            Label
          </Badge>
          <Badge
            palette="success"
            startIcon={<PlaceholderIcon {...createBadgeIconProps()} />}
          >
            Label
          </Badge>
          <Badge
            palette="warning"
            startIcon={<PlaceholderIcon {...createBadgeIconProps()} />}
          >
            Label
          </Badge>
          <Badge
            palette="danger"
            startIcon={<PlaceholderIcon {...createBadgeIconProps()} />}
          >
            Label
          </Badge>
        </div>

        <div
          className={hstack({
            gap: '4',
            mt: '2',
          })}
        >
          <Badge
            usage="outline"
            palette="neutral"
            startIcon={<PlaceholderIcon {...createBadgeIconProps()} />}
          >
            Label
          </Badge>
          <Badge
            usage="outline"
            palette="info"
            startIcon={<PlaceholderIcon {...createBadgeIconProps()} />}
          >
            Label
          </Badge>
          <Badge
            usage="outline"
            palette="success"
            startIcon={<PlaceholderIcon {...createBadgeIconProps()} />}
          >
            Label
          </Badge>
          <Badge
            usage="outline"
            palette="warning"
            startIcon={<PlaceholderIcon {...createBadgeIconProps()} />}
          >
            Label
          </Badge>
          <Badge
            usage="outline"
            palette="danger"
            startIcon={<PlaceholderIcon {...createBadgeIconProps()} />}
          >
            Label
          </Badge>
        </div>

        <div
          className={hstack({
            gap: '4',
            mt: '4',
          })}
        >
          <Badge palette="neutral" size="md">
            Label
          </Badge>
          <Badge palette="info" size="md">
            Label
          </Badge>
          <Badge palette="success" size="md">
            Label
          </Badge>
          <Badge palette="warning" size="md">
            Label
          </Badge>
          <Badge palette="danger" size="md">
            Label
          </Badge>
        </div>
        <div
          className={hstack({
            gap: '4',
            mt: '4',
          })}
        >
          <Badge usage="outline" palette="neutral" size="md">
            Label
          </Badge>
          <Badge usage="outline" palette="info" size="md">
            Label
          </Badge>
          <Badge usage="outline" palette="success" size="md">
            Label
          </Badge>
          <Badge usage="outline" palette="warning" size="md">
            Label
          </Badge>
          <Badge usage="outline" palette="danger" size="md">
            Label
          </Badge>
        </div>
      </section>

      <section className={css({ my: '4' })}>
        <PageHeading>Custom Usage</PageHeading>
        <div
          className={hstack({
            gap: '4',
          })}
        >
          <Badge
            startIcon={<PlaceholderIcon {...createBadgeIconProps()} />}
            className={css({ p: '6', bgColor: 'yellow', color: 'black' })}
          >
            wu tang
          </Badge>
        </div>
      </section>
    </>
  )
}
