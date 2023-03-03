import {
  getPaginationProps,
  getGridProps,
  getGridItemProps,
  getJSPaginationProps,
  getJSGridProps,
  getJSGridItemProps,
} from '../../../src'

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
    <div
      style={{
        backgroundColor: 'var(--ps-surface-weak)',
        border: '1px solid var(--ps-border)',
        borderRadius: '6px',
        height: '2rem',
        width: '18.75rem',
      }}
    />
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
    <div className="App-container column">
      <div {...allStyles.container}>
        <div>
          <PaginationInfo />
        </div>
        <div>
          <SelectPlaceholder />
        </div>
        <div>
          <PaginationButtons />
        </div>
      </div>
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
      <div>
        <PaginationInfoJS />
      </div>
      <div>
        <SelectPlaceholder />
      </div>
      <div>
        <PaginationButtonsJS />
      </div>
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
          <div {...styles.container} {...getGridItemProps({ colSpan: 4 })}>
            <div>
              <PaginationButtons />
            </div>
          </div>
          <div {...getGridItemProps({ colSpan: 4 })}></div>
        </div>
      </div>

      <div className="App-container column">
        <div {...getGridProps({ cols: 12 })}>
          <div {...styles.container} {...getGridItemProps({ colSpan: 12 })}>
            <AllPagination />
          </div>
        </div>
      </div>

      <h3>JS API</h3>
      <div className="App-container column">
        <div style={getJSGridProps({ cols: 12 }).styles}>
          <div style={getJSGridItemProps({ colSpan: 4 }).styles}></div>
          <div
            style={{
              ...getJSGridItemProps({ colSpan: 4 }).styles,
              ...styles.container.styles,
            }}
          >
            <div>
              <PaginationButtonsJS />
            </div>
          </div>
          <div style={getJSGridItemProps({ colSpan: 4 }).styles}></div>
        </div>
      </div>

      <div className="App-container column">
        <div style={getJSGridProps({ cols: 12 }).styles}>
          <div {...styles.container} {...getGridItemProps({ colSpan: 12 })}>
            <div
              style={{
                ...getJSGridItemProps({ colSpan: 12 }).styles,
                ...styles.container.styles,
              }}
            >
              <AllPaginationJS />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
