import { ProgressBar } from '@pluralsight/react'

const progressBarPageContent = (
  <div id="progress">
    <h2>Progress</h2>

    <ProgressBar ariaLabel="one" now={10} size="xs" kind="inset" />

    <br />
    <ProgressBar ariaLabel="one" now={50} kind="inset" />

    <br />
    <ProgressBar ariaLabel="one" now={20} size="xs" />

    <br />
    <ProgressBar ariaLabel="one" now={100} id="test" />
  </div>
)

export default function ProgressBarPage() {
  return progressBarPageContent
}
