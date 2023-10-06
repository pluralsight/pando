import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const usage =
  '\nUsage: Tools to make it easy to setup and update projects that use the Pando Design System.'

const options = yargs(hideBin(process.argv))
  .usage(usage)
  .command({
    command: 'setup',
    describe: 'Set up a project to use Pando',
    handler: () => console.log('Welcome to Pando setup'),
  })
  .command({
    command: 'update',
    describe: 'Update Pando packages to the most up-to-date versions',
    handler: () => console.log('Welcome to Pando update'),
  })
  .help(true).argv
