declare module '*.module.css' {
  const styles: {
    [className: string]: string
    base: string
  }
  export default styles
  export const tooltipWrapper: string
  export const tooltip: string
  export const tooltipContent: string
  export const tooltipTrigger: string
}
