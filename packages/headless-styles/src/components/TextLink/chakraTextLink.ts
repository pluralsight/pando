import styles from './generated/textLinkCSS.module'
import { textLinkIconSize } from './shared'

export const ChakraTextLink = {
  baseStyle: {
    ...styles.textLinkBase,
    '& svg': {
      width: textLinkIconSize,
      height: textLinkIconSize,
    },
  },
}
