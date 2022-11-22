import styles from './generated/popoverCSS.module'

export const ChakraPopover = {
  baseStyle: {
    popper: {
      ...styles.popover,
    },
    content: {
      ...styles.popoverContent,
      ...styles.popoverContentWithHeading,
      '--popper-arrow-shadow-color':
        styles.popoverContent['&::after'].borderColor,
      '--popper-arrow-bg': styles.popoverContent['&::after'].backgroundColor,
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
