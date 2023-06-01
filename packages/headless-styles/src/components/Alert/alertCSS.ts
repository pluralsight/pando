import { createClassNameProp } from '../../utils/helpers'
import type { ButtonOptions, InputOptions } from '../../types'
import type { ConfirmDialogKind } from '../ConfirmDialog/types'
import {
  createDialogIconProps,
  createPandoOptions,
} from '../shared/defaultOptions'
import type { DialogOptions } from '../types'
import { getAlertA11yProps } from './shared'
import './alertCSS.scss'

const ALERT = 'pando-alert'

export function getAlertBackdropProps(options: DialogOptions) {
  const a11yProps = getAlertA11yProps(options)

  return {
    backdrop: {
      ...createClassNameProp(`${ALERT}-backdrop`, 'pando_alertDialogBackdrop'),
    },
    focusGuard: {
      ...a11yProps.focusGuard,
      ...createClassNameProp(
        `${ALERT}-focus-guard`,
        'pando_alertDialogFocusGuard'
      ),
    },
    wrapper: {
      ...a11yProps.wrapper,
      ...createClassNameProp(ALERT, 'pando_alertDialogWrapper'),
    },
  }
}

export function getAlertProps() {
  return {
    ...getAlertA11yProps({} as DialogOptions).section,
    ...createClassNameProp(`${ALERT}-section`, 'pando_alertDialogSection'),
  }
}

export function getAlertHeaderProps(kind: ConfirmDialogKind) {
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

export function getAlertHeadingProps(id: string) {
  return {
    ...getAlertA11yProps({ headingId: id } as DialogOptions).heading,
    ...createClassNameProp(`${ALERT}-heading`),
  }
}

export function getAlertBodyProps(id: string) {
  return {
    ...getAlertA11yProps({ bodyId: id } as DialogOptions).body,
    ...createClassNameProp(`${ALERT}-body`),
  }
}

export function getAlertLabelProps(htmlFor: string) {
  return {
    htmlFor,
    ...createClassNameProp(`${ALERT}-label`, 'pando_alertDialogLabel'),
  }
}

export function getAlertInputProps(options: InputOptions) {
  return {
    inputOptions: createPandoOptions<InputOptions>({
      ...options,
      size: 'l',
    }),
    inputWrapper: {
      ...createClassNameProp(
        `${ALERT}-input-wrapper`,
        'pando_alertDialogInputWrapper'
      ),
    },
  }
}

export function getAlertFooterProps() {
  return {
    ...createClassNameProp(`${ALERT}-footer`, 'pando_alertDialogFooter'),
  }
}

export function getAlertCancelButtonProps() {
  return {
    btnOptions: createPandoOptions<ButtonOptions>({
      usage: 'outline',
    }),
    button: {
      ...createClassNameProp(`${ALERT}-cancel`),
    },
  }
}

export function getAlertConfirmButtonProps(kind: ConfirmDialogKind) {
  return {
    btnOptions: createPandoOptions<ButtonOptions>({
      sentiment: kind === 'destructive' ? 'danger' : 'action',
    }),
    button: {
      ...createClassNameProp(`${ALERT}-confirm`),
    },
  }
}
