import { argv } from 'bun'
import commandLineArgs from 'command-line-args'
import { nextChannelLabel } from '../../../versions.mjs'
import { error } from '../../theme.mjs'

const EXPERIMENTAL = 'experimental'
const NEXT = 'next'
const ALPHA = nextChannelLabel
const STABLE = 'stable'
const LATEST = 'latest'

const releaseChannels = [EXPERIMENTAL, NEXT, ALPHA, STABLE, LATEST]
const preReleaseChannels = [EXPERIMENTAL, NEXT, ALPHA]
const stableChannels = [STABLE, LATEST]
const channelList = releaseChannels.join(', ')

const paramDefinitions = [
  {
    name: 'commit',
    alias: 'C',
    type: String,
    description:
      'GitHub commit SHA. When provided, automatically finds corresponding CI build.',
    defaultValue: null,
  },
  {
    name: 'ci',
    type: Boolean,
    description:
      'Whether or not you are running the command in a CI environment (which skips prompts).',
    defaultValue: null,
  },
  {
    name: 'release',
    alias: 'R',
    type: String,
    description: `Release channel (${channelList})`,
  },
  {
    name: 'version',
    alias: 'V',
    type: String,
    description: 'NPM version of package you want to use for future release.',
    defaultValue: null,
  },
]

function parseParams() {
  console.log('parseParams')
  console.log('rawArgs', argv)

  // Update to use yargs package
  const params = commandLineArgs(paramDefinitions)
  // const args = yargs(rawArgs)
  // console.log('Unparsed args:', rawArgs)
  // console.log('Parsed args:', args)

  const channel = params.release
  const commit = params.commit

  if (!releaseChannels.includes(channel)) {
    console.error(
      error`Invalid release channel (-r) "${channel}". Must be ${channelList}`,
    )
    process.exit(1)
  }

  if ((commit == null || !commit) && preReleaseChannels.includes(channel)) {
    console.error(error`A --commit param must be specified.`)
    process.exit(1)
  }

  if (stableChannels.includes(channel) && !params.version) {
    console.error(
      error('A --version param must be specified for stable releases'),
    )
    process.exit(1)
  }

  return params
}

export default parseParams
