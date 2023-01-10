import { createJSProps } from '../../utils/helpers'
import type { Position } from '../types'
import type { MenuOptions } from './types'
import {
  createMenuProps,
  getDefaultMenuOptions,
  createMenuItemProps,
  getMenuPositionClasses,
} from './shared'
import styles from './generated/menuCSS.module'
import positionStyles from './generated/menuPositioning.module'

type Side = 'top' | 'bottom' | 'left' | 'right'
type Alignment = 'Start' | 'Center' | 'End'
type Axis = 'horizontal' | 'vertical'

function getSide(position: Position): Side {
  if (position.startsWith('bottom')) {
    return 'bottom'
  } else if (position.startsWith('right')) {
    return 'right'
  } else if (position.startsWith('left')) {
    return 'left'
  }

  return 'top'
}

function getAlignment(position: Position): Alignment {
  if (position.indexOf('Start') > -1) {
    return 'Start'
  } else if (position.indexOf('End') > -1) {
    return 'End'
  }

  return 'Center'
}

function getAxis(side: Side): Axis {
  return side === 'top' || side === 'bottom' ? 'horizontal' : 'vertical'
}

function getPositionClasses(side: Side, axis: Axis, alignment: Alignment) {
  return {
    sideClass: `${side}Position` as keyof typeof positionStyles,
    alignmentClass: `${axis}${alignment}` as keyof typeof positionStyles,
    contentSideClass: `${side}PositionContent` as keyof typeof positionStyles,
    contentAlignmentClass:
      `${axis}${alignment}Content` as keyof typeof positionStyles,
  }
}

export function getJSMenuProps(options?: MenuOptions) {
  const defaultOptions = getDefaultMenuOptions(options)
  const props = createMenuProps(defaultOptions)
  const { menuPositionClass } =
    getMenuPositionClasses<typeof styles>(defaultOptions)
  const side = getSide(defaultOptions.position)
  const positionClasses = getPositionClasses(
    side,
    getAxis(side),
    getAlignment(defaultOptions.position)
  )

  const baseProps = {
    ...props,
    menu: {
      a11yProps: props.menu,
    },
    trigger: {
      a11yProps: props.trigger,
    },
  }
  const jsStyles = {
    menu: {
      ...positionStyles[positionClasses.sideClass],
      ...positionStyles[positionClasses.alignmentClass],
      ...styles[menuPositionClass],
      ...styles.menu,
    },
  }

  return {
    ...baseProps,
    wrapper: {
      ...baseProps.wrapper,
      ...createJSProps(styles.menuWrapper),
    },
    menu: {
      ...baseProps.menu,
      ...createJSProps(jsStyles.menu),
      keyframes: {
        ...createJSProps(styles.keyframesFadeIn),
      },
    },
  }
}

export function getJSMenuItemProps() {
  const props = createMenuItemProps()

  const baseProps = {
    ...props,
    menuListItem: {
      a11yProps: props.menuListItem,
    },
    menuItem: {
      a11yProps: props.menuItem,
    },
  }

  const jsStyles = {
    menuListItem: {
      ...styles.menuListItem,
      ...styles.menuListItem____menuListItem,
    },
    menuItem: {
      ...styles.menuItem,
      '& > *': styles.menuItem___all_children,
      '& > svg': styles.menuItem___svg,
    },
  }

  return {
    ...baseProps,
    divider: {
      ...baseProps.menuListItem,
      ...createJSProps(styles.menuDivider),
    },
    menuListItem: {
      ...baseProps.menuListItem,
      ...createJSProps(jsStyles.menuListItem),
    },
    menuItem: {
      ...baseProps.menuItem,
      ...createJSProps(jsStyles.menuItem),
    },
    menuItemText: {
      ...baseProps.menuItemText,
      ...createJSProps(styles.menuItemText),
    },
  }
}
