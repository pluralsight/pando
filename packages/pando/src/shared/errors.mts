import { type CLICommand } from './const.mts'

export function getCLICommandError(command: CLICommand) {
  return `Oh no! There was a problem running the ${
    command ?? ''
  } command. Help us build a better CLI by reporting this error to the Pando Team: https://github.com/pluralsight/pando/issues/new?assignees=&labels=bug%2Cneeds+triage&projects=&template=bug.yml&title=%5BBug%3F%5D%3A+.`
}
