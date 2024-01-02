export interface CreateButtonIconOptions {
  height: string
  width: string
}

export function createButtonIconProps(options?: CreateButtonIconOptions) {
  return {
    'aria-hidden': true,
    height: options?.height ?? '1.25rem',
    width: options?.width ?? '1.25rem',
  }
}
