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

const defaultBarJS = getJSProgressProps({
  ariaLabel: 'default progress bar',
})
const xsBarJS = getJSProgressProps({
  ariaLabel: 'xs progress bar',
  now: 50,
  size: 'xs',
})
const xsInsetBarJS = getJSProgressProps({
  ariaLabel: 'inset xs progress bar',
  kind: 'inset',
  now: 80,
  size: 'xs',
})
const insetBarJS = getJSProgressProps({
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

      <h3>JS</h3>
      <div className="App-container column">
        <div style={{ ...defaultBarJS.wrapper.styles }}>
          <div style={defaultBarJS.bar.styles} />
        </div>
      </div>
      <div className="App-container column">
        <div style={xsBarJS.wrapper.styles}>
          <div style={xsBarJS.bar.styles} />
        </div>
      </div>
      <div className="App-container column">
        <div style={xsInsetBarJS.wrapper.styles}>
          <div style={xsInsetBarJS.bar.styles} />
        </div>
      </div>
      <div className="App-container column">
        <div style={insetBarJS.wrapper.styles}>
          <div style={insetBarJS.bar.styles} />
        </div>
      </div>
    </div>
  )
}
