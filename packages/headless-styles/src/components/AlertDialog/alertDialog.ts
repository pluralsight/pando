import { createClassNameProp } from '../../utils/helpers'
import type { IconButtonOptions, InputOptions } from '../../types'
import {
  createDialogIconProps,
  createPandoOptions,
} from '../shared/defaultOptions'
import './alertDialog.scss'
import { getAlertDefaultProps } from './shared'
import type { AlertDialogKind, AlertDialogOptions } from './types'

const ALERT = 'pando-alert'

export function getAlertDialogProps(options: AlertDialogOptions) {
  const props = getAlertDefaultProps(options)
  const isPopover = props.usage === 'popover'
  const pandoClass = isPopover ? 'pando_alertPopover' : 'pando_alertDialog'

  return {
    ...createClassNameProp(`${ALERT}`, pandoClass, ...props.classNames),
    'aria-describedby': props.bodyId,
    'aria-labelledby': props.headingId,
  }
}

export function getAlertDialogHeaderProps(kind: AlertDialogKind) {
  const iconProps = createDialogIconProps(
    { kind },
    {
      iconWrapper: {
        ...createClassNameProp(`${ALERT}-icon`, 'pando_alertDialogTitleIcon'),
      },
    },
  )

  return {
    ...iconProps,
    header: {
      ...createClassNameProp(`${ALERT}-header`, 'pando_alertDialogHeader'),
    },
  }
}

export function getAlertDialogIconButtonProps(classNames?: string[]) {
  return {
    iconBtnOptions: createPandoOptions<IconButtonOptions>({
      ariaLabel: 'Close dialog',
      sentiment: 'default',
      usage: 'text',
      size: 'l',
    }),
    iconBtnWrapper: {
      ...createClassNameProp(
        `${ALERT}-icon-btn-wrapper`,
        'pando_alertDialogIconButtonWrapper',
        ...(classNames ?? []),
      ),
    },
  }
}

export function getAlertDialogHeadingProps(id: string) {
  return {
    id,
    ...createClassNameProp(`${ALERT}-heading`),
  }
}

export function getAlertDialogBodyProps(id: string) {
  return {
    id,
    ...createClassNameProp(`${ALERT}-body`),
  }
}

export function getAlertDialogLabelProps(htmlFor: string) {
  return {
    htmlFor,
    ...createClassNameProp(`${ALERT}-label`, 'pando_alertDialogLabel'),
  }
}

export function getAlertDialogInputProps(options: InputOptions) {
  return {
    inputOptions: createPandoOptions<InputOptions>({
      ...options,
      pandoSize: 'l',
    }),
    inputWrapper: {
      ...createClassNameProp(
        `${ALERT}-input-wrapper`,
        'pando_alertDialogInputWrapper',
      ),
    },
  }
}

export function getAlertDialogFooterProps() {
  return {
    ...createClassNameProp(`${ALERT}-footer`, 'pando_alertDialogFooter'),
  }
}
