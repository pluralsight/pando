import type { FieldsetOptions, LegendOptions } from './types'

function createDefaultFieldsetOptions(options?: FieldsetOptions) {
  return {
    classNames: options?.classNames ?? [],
  }
}

// public

export function getDefaultFieldsetOptions(options?: FieldsetOptions) {
  return createDefaultFieldsetOptions(options)
}

export function getDefaultLegendOptions(options?: LegendOptions) {
  return createDefaultFieldsetOptions(options)
}
