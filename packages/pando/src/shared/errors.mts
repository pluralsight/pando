import { CLICommand } from './const.mjs'

export function getCLICommandError(command: CLICommand) {
  return `Oh no! There was a problem running the ${command} command. Please report this error to the  Pando Team by submitting an issue on Github: https://github.com/pluralsight/pando/issues/new?assignees=&labels=bug%2Cneeds+triage&projects=&template=bug.yml&title=%5BBug%3F%5D%3A+.`
}

export function getGenericError() {
  return `Oh no! There was a problem running the command. Please report this error to the  Pando Team by submitting an issue on Github: https://github.com/pluralsight/pando/issues/new?assignees=&labels=bug%2Cneeds+triage&projects=&template=bug.yml&title=%5BBug%3F%5D%3A+.`
}
