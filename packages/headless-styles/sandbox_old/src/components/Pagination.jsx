import {
  getButtonProps,
  getIconButtonProps,
  getIconProps,
  getPaginationProps,
  getSelectProps,
  getSelectOptionProps,
} from '../../../src'
import {
  CaretRightIcon,
  CaretLeftIcon,
  ChevronDownIcon,
} from '@pluralsight/icons'

function PaginationInfo(props) {
  const { paginationProps } = props

  return (
    <span {...paginationProps.text}>
      <strong>1-25</strong> of 1,234
    </span>
  )
}

function Option(props) {
  return (
    <option {...getSelectOptionProps()} value={props.value}>
      {props.children}
    </option>
  )
}

function Select(props) {
  const { paginationProps } = props

  const selectStyles = getSelectProps({
    ...paginationProps.selectOptions,
    id: 'row-count',
    name: 'row_count',
    value: props.value,
  })

  return (
    <div {...selectStyles.fieldWrapper}>
      <div {...selectStyles.selectWrapper}>
        <select {...selectStyles.select} onChange={props.onChange}>
          <Option value="5">5 Rows</Option>
          <Option value="10">10 Rows</Option>
          <Option value="25">25 Rows</Option>
        </select>
        <span {...selectStyles.iconWrapper}>
          <ChevronDownIcon {...getIconProps(selectStyles.iconOptions)} />
        </span>
      </div>
    </div>
  )
}

function PaginationButtons(props) {
  const paginationProps = getPaginationProps(props)

  return (
    <div {...paginationProps.buttonGroup}>
      <button
        {...getButtonProps({
          ...paginationProps.buttonOptions,
          disabled: true,
        })}
      >
        Newer
      </button>
      <button {...getButtonProps(paginationProps.buttonOptions)}>Older</button>
    </div>
  )
}

function ArrowButtons(props) {
  const { paginationProps } = props

  const prevButtonProps = getIconButtonProps({
    ...paginationProps.iconButtonOptions,
    ariaLabel: 'Newer',
    disabled: true,
  })
  const nextButtonProps = getIconButtonProps({
    ...paginationProps.iconButtonOptions,
    ariaLabel: 'Older',
  })

  return (
    <div {...paginationProps.buttonGroup}>
      <button {...prevButtonProps.button}>
        <CaretLeftIcon {...getIconProps(prevButtonProps.iconOptions)} />
      </button>
      <button {...nextButtonProps.button}>
        <CaretRightIcon {...getIconProps(nextButtonProps.iconOptions)} />
      </button>
    </div>
  )
}

function AllPagination(props) {
  const paginationProps = getPaginationProps(props)

  return (
    <div {...paginationProps.container}>
      <PaginationInfo paginationProps={paginationProps} />
      <Select paginationProps={paginationProps} />
      {props.size === 'm' ? (
        <ArrowButtons paginationProps={paginationProps} />
      ) : (
        <PaginationButtons size={props.size} />
      )}
    </div>
  )
}

export default function Pagination() {
  return (
    <div id="pagination">
      <h2>Pagination</h2>

      <h3>CSS API</h3>
      <div className="App-container column">
        <PaginationButtons />
      </div>

      <div className="App-container column">
        <AllPagination />
      </div>

      <div className="App-container column">
        <AllPagination size="m" />
      </div>
    </div>
  )
}
