import {
  getPaginationProps,
  getGridProps,
  getGridItemProps,
  getJSPaginationProps,
  getJSGridProps,
  getJSGridItemProps,
  getSelectProps,
  getIconProps,
} from '../../../src'
import { ChevronDownIcon } from '@pluralsight/icons'

const selectStyles = getSelectProps({ size: 'm' })
const iconProps = getIconProps(selectStyles.iconOptions)

const styles = getPaginationProps()
const allStyles = getPaginationProps({
  kind: 'bar',
})

const stylesJS = getJSPaginationProps()
const allStylesJS = getJSPaginationProps({
  kind: 'bar',
})

function PaginationInfo() {
  return (
    <>
      <small {...styles.text}>
        <strong>1-25</strong> of 1,234
      </small>
    </>
  )
}

function SelectPlaceholder() {
  return (
    <div {...selectStyles.fieldWrapper}>
      <div {...selectStyles.selectWrapper}>
        <select {...selectStyles.select}>
          <option value="5">5 Rows</option>
          <option value="10">10 Rows</option>
          <option value="25">25 Rows</option>
        </select>
        <span {...selectStyles.iconWrapper}>
          <ChevronDownIcon {...iconProps} />
        </span>
      </div>
    </div>
  )
}

function PaginationButtons() {
  return (
    <>
      <button {...styles.newer} disabled>
        Newer
      </button>
      <button {...styles.older}>Older</button>
    </>
  )
}

function AllPagination() {
  return (
    <div {...allStyles.container}>
      <PaginationInfo />
      <SelectPlaceholder />
      <PaginationButtons />
    </div>
  )
}

// JS
function PaginationInfoJS() {
  return (
    <>
      <small style={stylesJS.text.styles}>
        <strong style={stylesJS.text.styles['& > strong']}>1-25</strong> of
        1,234
      </small>
    </>
  )
}

function PaginationButtonsJS() {
  return (
    <>
      <button
        style={{
          ...stylesJS.newer.styles,
          ...stylesJS.newer.styles['&:disabled'],
        }}
        disabled
      >
        Newer
      </button>
      <button style={stylesJS.older.styles}>Older</button>
    </>
  )
}

function AllPaginationJS() {
  return (
    <div style={allStylesJS.container.styles}>
      <PaginationInfoJS />
      <SelectPlaceholder />
      <PaginationButtonsJS />
    </div>
  )
}

export default function Pagination() {
  return (
    <div id="pagination">
      <h2>Pagination</h2>
      <h3>CSS API</h3>
      <div className="App-container column">
        <div {...getGridProps({ cols: 12 })}>
          <div {...getGridItemProps({ colSpan: 4 })}></div>
          <div {...getGridItemProps({ colSpan: 4 })}>
            <div {...styles.container}>
              <PaginationButtons />
            </div>
          </div>
          <div {...getGridItemProps({ colSpan: 4 })}></div>
        </div>
      </div>

      <div className="App-container column">
        <div {...getGridProps({ cols: 12 })}>
          <div {...getGridItemProps({ colSpan: 12 })}>
            <AllPagination />
          </div>
        </div>
      </div>

      <h3>JS API</h3>
      <div className="App-container column">
        <div style={getJSGridProps({ cols: 12 }).styles}>
          <div style={getJSGridItemProps({ colSpan: 4 }).styles}></div>
          <div style={getJSGridItemProps({ colSpan: 4 }).styles}>
            <div style={stylesJS.container.styles}>
              <PaginationButtonsJS />
            </div>
          </div>
          <div style={getJSGridItemProps({ colSpan: 4 }).styles}></div>
        </div>
      </div>

      <div className="App-container column">
        <div style={getJSGridProps({ cols: 12 }).styles}>
          <div {...getGridItemProps({ colSpan: 12 })}>
            <AllPaginationJS />
          </div>
        </div>
      </div>
    </div>
  )
}
