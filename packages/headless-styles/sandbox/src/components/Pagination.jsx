import {
  getPaginationProps,
  getGridProps,
  getGridItemProps,
} from '../../../src'

const styles = getPaginationProps()
const allStyles = getPaginationProps({
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
      <button {...styles.newer} data-disabled>
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

export default function Pagination() {
  return (
    <div id="pagination">
      <h3>Pagination</h3>
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
    </div>
  )
}
