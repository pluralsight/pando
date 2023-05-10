import { CircularProgress } from '@pluralsight/react/dev'

const ciruclarProgressPageContent = (
  <div id="progress">
    <h3>Circular Progress</h3>

    <div className="App-container">
      <CircularProgress ariaLabel="chart 1" now={32} />
      <CircularProgress ariaLabel="chart 2" now={50} displayValue />
      <CircularProgress ariaLabel="chart 3" kind="indeterminate" />
    </div>
    <div className="App-container">
      <CircularProgress ariaLabel="chart 4" size="xs" now={32} />
      <CircularProgress ariaLabel="chart 5" size="xs" now={50} displayValue />
      <CircularProgress ariaLabel="chart 6" size="xs" kind="indeterminate" />
    </div>
  </div>
)

export default function CircularProgressPage() {
  return ciruclarProgressPageContent
}
