import { getProgressProps } from '../../../src'

const defaultBar = getProgressProps({
  ariaLabel: 'default progress bar',
})
const xsBar = getProgressProps({
  ariaLabel: 'xs progress bar',
  now: 50,
  size: 'xs',
})
const xsInsetBar = getProgressProps({
  ariaLabel: 'inset xs progress bar',
  kind: 'inset',
  now: 80,
  size: 'xs',
})
const insetBar = getProgressProps({
  ariaLabel: 'inset progress bar',
  kind: 'inset',
  now: 60,
})

export default function Progress() {
  return (
    <div id="progress">
      <h2>Progress</h2>

      <h3>CSS</h3>
      <div className="App-container column">
        <div {...defaultBar.wrapper}>
          <div {...defaultBar.bar} />
        </div>
      </div>
      <div className="App-container column">
        <div {...xsBar.wrapper}>
          <div {...xsBar.bar} />
        </div>
      </div>
      <div className="App-container column">
        <div {...xsInsetBar.wrapper}>
          <div {...xsInsetBar.bar} />
        </div>
      </div>
      <div className="App-container column">
        <div {...insetBar.wrapper}>
          <div {...insetBar.bar} />
        </div>
      </div>
    </div>
  )
}
