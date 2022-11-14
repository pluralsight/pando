declare module '*.module.css' {
  interface Styles {
    readonly [className: string]: string
    readonly [index: string]: string
  }

  const styles: Styles
  export default styles
}
