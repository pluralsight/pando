import { getPaginationProps } from '../../../src'

const styles = getPaginationProps()

export default function Pagination() {
  return (
    <div id="pagination">
      <h3>Pagination</h3>
      <div className="App-container column">
        <div {...styles.container}>
          <button>Newer</button>
          <button>Older</button>
        </div>
      </div>
    </div>
  )
}
