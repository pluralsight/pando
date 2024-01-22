export type { defineUtility } from './utilities'
export type { definePattern } from './patterns'

export type Simplify<T> = T extends unknown ? { [K in keyof T]: T[K] } : never
