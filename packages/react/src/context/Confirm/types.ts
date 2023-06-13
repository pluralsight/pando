// types

export type ConfirmContext = (cb: Callback) => void
export type ConfirmState = boolean
export type Callback = (confirmed: boolean) => unknown
