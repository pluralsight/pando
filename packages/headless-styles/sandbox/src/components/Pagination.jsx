import {
  getButtonProps,
  getIconButtonProps,
  getIconProps,
  getPaginationProps,
  getSelectProps,
  getSelectOptionProps,
  getJSButtonProps,
  getJSIconButtonProps,
  getJSIconProps,
  getJSPaginationProps,
  getJSSelectProps,
  getJSSelectOptionProps,
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
        }).button}
      >
        Newer
      </button>
      <button {...getButtonProps(paginationProps.buttonOptions).button}>
        Older
      </button>
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

// JS -----------

function JSPaginationInfo(props) {
  const { paginationProps } = props

  return (
    <span style={paginationProps.text.styles}>
      <strong style={paginationProps.text.styles['& > strong']}>1-25</strong> of
      1,234
    </span>
  )
}

function JSOption(props) {
  const optionProps = getJSSelectOptionProps()

  return (
    <option style={optionProps.styles} value={props.value}>
      {props.children}
    </option>
  )
}

function JSSelect(props) {
  const { paginationProps } = props
  const selectStyles = getJSSelectProps({
    ...paginationProps.selectOptions,
    id: 'row-count-js',
    name: 'row_count_js',
    value: props.value,
  })
  const iconProps = getJSIconProps(selectStyles.iconOptions)

  return (
    <div style={selectStyles.fieldWrapper.styles}>
      <div style={selectStyles.selectWrapper.styles}>
        <select style={selectStyles.select.styles} onChange={props.onChange}>
          <JSOption value="5">5 Rows</JSOption>
          <JSOption value="10">10 Rows</JSOption>
          <JSOption value="25">25 Rows</JSOption>
        </select>
        <span style={selectStyles.iconWrapper.styles}>
          <ChevronDownIcon style={iconProps.styles} {...iconProps.a11yProps} />
        </span>
      </div>
    </div>
  )
}

function JSPaginationButtons() {
  const paginationProps = getJSPaginationProps()
  const buttonProps = getJSButtonProps(paginationProps.buttonOptions)

  return (
    <div style={paginationProps.buttonGroup.styles}>
      <button
        disabled
        style={{
          ...buttonProps.button.styles,
          ...buttonProps.button.styles['&:disabled'],
        }}
      >
        Newer
      </button>
      <button style={buttonProps.button.styles}>Older</button>
    </div>
  )
}

function JSArrowButtons(props) {
  const { paginationProps } = props
  const prevButtonProps = getJSIconButtonProps({
    ...paginationProps.iconButtonOptions,
    ariaLabel: 'Newer',
    disabled: true,
  })
  const nextButtonProps = getJSIconButtonProps({
    ...paginationProps.iconButtonOptions,
    ariaLabel: 'Older',
  })
  const prevIconProps = getJSIconProps(prevButtonProps.iconOptions)
  const nextIconProps = getJSIconProps(nextButtonProps.iconOptions)

  return (
    <div style={paginationProps.buttonGroup.styles}>
      <button
        disabled
        style={{
          ...prevButtonProps.button.styles,
          ...prevButtonProps.button.styles['&:disabled'],
        }}
      >
        <CaretLeftIcon
          style={prevIconProps.styles}
          {...prevIconProps.a11yProps}
        />
      </button>
      <button style={nextButtonProps.button.styles}>
        <CaretRightIcon
          style={nextIconProps.styles}
          {...nextIconProps.a11yProps}
        />
      </button>
    </div>
  )
}

function JSAllPagination(props) {
  const paginationProps = getJSPaginationProps(props)

  return (
    <div style={paginationProps.container.styles}>
      <JSPaginationInfo paginationProps={paginationProps} />
      <JSSelect paginationProps={paginationProps} />

      {props.size === 'm' ? (
        <JSArrowButtons paginationProps={paginationProps} />
      ) : (
        <JSPaginationButtons />
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

      <h3>JS API</h3>
      <div className="App-container column">
        <JSPaginationButtons />
      </div>

      <div className="App-container column">
        <JSAllPagination />
      </div>

      <div className="App-container column">
        <JSAllPagination size="m" />
      </div>
    </div>
  )
}
