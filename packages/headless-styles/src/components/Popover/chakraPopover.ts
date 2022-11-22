import styles from './generated/popoverCSS.module'

export const ChakraPopover = {
  baseStyle: {
    popper: {
      ...styles.popover,
    },
    content: {
      ...styles.popoverContent,
      ...styles.popoverContentWithHeading,
      '--popper-arrow-shadow-color': styles.popover['&::after'].borderColor,
      '--popper-arrow-bg': styles.popover['&::after'].backgroundColor,
    },
    header: {
      ...styles.popoverHeader,
      borderBottom: '0',
      padding: 0,
    },
    body: {
      padding: 0,
    },
  },
}
