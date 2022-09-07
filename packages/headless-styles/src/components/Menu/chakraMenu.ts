import styles from './generated/menuCSS.module'

export const ChakraMenu = {
  baseStyle: {
    list: styles.menu,
    item: {
      ...styles.menuListItem,
      ...styles.menuItem,
    },
  },
}
