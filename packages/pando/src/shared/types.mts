import { CLIOPERATION, LOCKFILES, PMOPTIONS } from './const.mts'

type ObjectValues<T> = T[keyof T]

export type PMOptions = ObjectValues<typeof PMOPTIONS>

export type CLIOperation = ObjectValues<typeof CLIOPERATION>

export type Lockfiles = ObjectValues<typeof LOCKFILES>
