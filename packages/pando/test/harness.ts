import { realpathSync } from 'fs'

export const pandoExe = realpathSync('src/index.mts')

export const actions = {
  DOWN: '\x1B\x5B\x42',
  UP: '\x1B\x5B\x41',
  ENTER: '\x0D',
  SPACE: '\x20',
}
