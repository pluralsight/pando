import styles from './generated/tabCSS.module'

export const ChakraTab = {
  baseStyle: {
    root: styles.tabWrapper,
    tablist: {
      ...styles.tabList,
    },
    tab: {
      ...styles.tabBase,
      _selected: styles.tabBase_aria_selected__true,
    },
    tabpanel: styles.tabPanel,
  },
  defaultProps: {
    size: 'm',
    variant: 'default',
  },
  sizes: {
    s: {
      tab: styles.sTab,
    },
    m: {},
  },
  variants: {
    default: {},
  },
}
