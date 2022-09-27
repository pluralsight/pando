import type { Tech } from '../types'
import type { ModalOptions } from './types'

const defaultModalOptions = {
  ariaLabel: '',
  bodyId: '',
  headingId: '',
  id: '',
  tech: '' as Tech,
}

// Public

export function getDefaultModalOptions(options?: ModalOptions) {
  return {
    ariaLabel: options?.ariaLabel ?? defaultModalOptions.ariaLabel,
    bodyId: options?.bodyId ?? defaultModalOptions.bodyId,
    headingId: options?.headingId ?? defaultModalOptions.headingId,
    id: options?.id ?? defaultModalOptions.id,
    tech: options?.tech ?? defaultModalOptions.tech,
  }
}
