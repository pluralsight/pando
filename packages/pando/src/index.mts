import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { usageInfo } from './shared/prompts.mts'
import { requestManualSelection } from './commands/requestManualSelection.mts'
import { setup, update } from './commands/options.mts'

export const pando = yargs(hideBin(process.argv))
  .usage(usageInfo)
  .command({
    command: setup.name,
    describe: setup.describe,
    handler: setup.handler,
  })
  .command({
    command: update.name,
    describe: update.describe,
    handler: update.handler,
  })
  .demandCommand()
  .fail(requestManualSelection)
  .help(true).argv
