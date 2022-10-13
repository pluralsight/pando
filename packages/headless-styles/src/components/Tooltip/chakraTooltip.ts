import styles from './generated/tooltipCSS.module'

export const ChakraTooltip = {
  baseStyle: {
    backgroundColor: styles.tooltipContent.backgroundColor,
    borderRadius: styles.tooltipContent.borderRadius,
    '--popper-arrow-bg': styles.tooltipContent.backgroundColor,
    color: styles.tooltipContent.color,
    padding: styles.tooltipContent.padding,
    fontSize: styles.tooltip.fontSize,
    fontWeight: styles.tooltip.fontWeight,
    lineHeight: styles.tooltip.lineHeight,
  },
}
