import type { AvatarSize } from './types'
import { iconSizeMap } from './shared'
import styles from './generated/avatarCSS.module'

const labelStyles = {
  fontSize: 'inherit',
  lineHeight: 'inherit',
}

function getSVGStyles(size: AvatarSize) {
  return {
    '& svg': {
      width: iconSizeMap[size],
      height: iconSizeMap[size],
    },
  }
}

export const ChakraAvatar = {
  baseStyle: {
    container: styles.baseAvatar,
  },
  defaultProps: {
    size: 'm',
    variant: 'default',
  },
  sizes: {
    xs: {
      container: {
        ...styles.xsAvatar,
        ...getSVGStyles('xs'),
      },
      label: labelStyles,
    },
    s: {
      container: {
        ...styles.sAvatar,
        ...getSVGStyles('s'),
      },
      label: labelStyles,
    },
    m: {
      container: {
        ...styles.mAvatar,
        ...getSVGStyles('m'),
      },
      label: labelStyles,
    },
    l: {
      container: {
        ...styles.lAvatar,
        ...getSVGStyles('l'),
      },
      label: labelStyles,
    },
    xl: {
      container: {
        ...styles.xlAvatar,
        ...getSVGStyles('xl'),
      },
      label: labelStyles,
    },
  },
  variants: {
    defalt: {
      container: styles.defaultAvatar,
    },
    action: {
      container: styles.actionAvatar,
    },
  },
}
