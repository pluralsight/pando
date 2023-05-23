import { getFormControlProps } from '../../../src'

export default function FormControl() {
  return (
    <div id="form-control">
      <h3>Form Control</h3>
      <div className="App-container">
        <div {...getFormControlProps().control}>Strong</div>
        <div
          {...getFormControlProps({
            disabled: true,
          }).control}
        >
          Disabled Control
        </div>
      </div>
    </div>
  )
}
