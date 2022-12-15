import { getProgressProps, getJSProgressProps } from '../../../src'

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

export default function Progress(props) {
  if (props.logJS) {
    console.log({ ...getJSProgressProps({ kind: 'inset' }) })
  }

  return (
    <div id="progress">
      <h3>Progress</h3>
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
