import { createClassNameProp } from '../../utils/helpers'
import type { ButtonOptions, InputOptions } from '../../types'
import type { ConfirmDialogKind } from '../ConfirmDialog/types'
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

  return {
    ...createClassNameProp(
      `${ALERT}`,
      'pando_alertDialog',
      ...props.classNames
    ),
    'aria-describedby': props.bodyId,
    'aria-labelledby': props.headingId,
    role: 'alertdialog',
  }
}

export function getAlertDialogHeaderProps(kind: AlertDialogKind) {
  const iconProps = createDialogIconProps(
    { kind },
    {
      iconWrapper: {
        ...createClassNameProp(`${ALERT}-icon`, 'pando_alertDialogTitleIcon'),
      },
    }
  )

  return {
    ...iconProps,
    header: {
      ...createClassNameProp(`${ALERT}-header`, 'pando_alertDialogHeader'),
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
        'pando_alertDialogInputWrapper'
      ),
    },
  }
}

export function getAlertDialogFooterProps() {
  return {
    ...createClassNameProp(`${ALERT}-footer`, 'pando_alertDialogFooter'),
  }
}

export function getAlertDialogCancelButtonProps() {
  return {
    btnOptions: createPandoOptions<ButtonOptions>({
      sentiment: 'default',
      usage: 'outline',
    }),
    button: {
      autoFocus: true,
      ...createClassNameProp(`${ALERT}-cancel-btn`),
    },
  }
}

export function getAlertDialogConfirmButtonProps(kind: ConfirmDialogKind) {
  return {
    btnOptions: createPandoOptions<ButtonOptions>({
      sentiment: kind === 'destructive' ? 'danger' : 'action',
    }),
    button: {
      ...createClassNameProp(`${ALERT}-confirm-btn`),
    },
  }
}
