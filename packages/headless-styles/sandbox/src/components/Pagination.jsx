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

const styles = getPaginationProps()

function PaginationInfo() {
  return (
    <small {...styles.text}>
      <strong>1-25</strong> of 1,234
    </small>
  )
}

function Option(props) {
  const optionProps = getSelectOptionProps()
  return (
    <option {...optionProps} value={props.value}>
      {props.children}
    </option>
  )
}

function Select(props) {
  const selectStyles = getSelectProps({
    ...styles.selectOptions,
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

function PaginationButtons() {
  return (
    <div {...styles.buttonGroup}>
      <button
        {...getButtonProps({
          ...styles.buttonOptions,
          disabled: true,
        }).button}
      >
        Newer
      </button>
      <button {...getButtonProps(styles.buttonOptions).button}>Older</button>
    </div>
  )
}

function ArrowButtons() {
  const prevButtonProps = getIconButtonProps({
    ...styles.iconButtonOptions,
    ariaLabel: 'Newer',
    disabled: true,
  })
  const nextButtonProps = getIconButtonProps({
    ...styles.iconButtonOptions,
    ariaLabel: 'Older',
  })

  return (
    <div {...styles.buttonGroup}>
      <button {...prevButtonProps.button}>
        <CaretLeftIcon {...getIconProps(prevButtonProps.iconOptions)} />
      </button>
      <button {...nextButtonProps.button}>
        <CaretRightIcon {...getIconProps(nextButtonProps.iconOptions)} />
      </button>
    </div>
  )
}

function AllPagination() {
  return (
    <div {...styles.container}>
      <PaginationInfo />
      <Select />
      <ArrowButtons />
    </div>
  )
}

// JS -----------

const stylesJS = getJSPaginationProps()

function JSPaginationInfo() {
  return (
    <small style={stylesJS.text.styles}>
      <strong style={stylesJS.text.styles['& > strong']}>1-25</strong> of 1,234
    </small>
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
  const selectStyles = getJSSelectProps({
    ...stylesJS.selectOptions,
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
  const newerButtonProps = getJSButtonProps({
    ...stylesJS.buttonOptions,
    disabled: true,
  })
  const olderButtonProps = getJSButtonProps({
    ...stylesJS.buttonOptions,
  })
  console.log(newerButtonProps)

  return (
    <div style={stylesJS.buttonGroup.styles}>
      <button
        disabled
        style={{
          ...newerButtonProps.button.styles,
          ...newerButtonProps.button.styles['&:disabled'],
        }}
      >
        Newer
      </button>
      <button style={olderButtonProps.button.styles}>Older</button>
    </div>
  )
}

function JSArrowButtons() {
  const prevButtonProps = getJSIconButtonProps({
    ...stylesJS.iconButtonOptions,
    ariaLabel: 'Newer',
    disabled: true,
  })
  const nextButtonProps = getJSIconButtonProps({
    ...stylesJS.iconButtonOptions,
    ariaLabel: 'Older',
  })
  const prevIconProps = getJSIconProps(prevButtonProps.iconOptions)
  const nextIconProps = getJSIconProps(nextButtonProps.iconOptions)

  return (
    <div style={stylesJS.buttonGroup.styles}>
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

function JSAllPagination() {
  return (
    <div style={stylesJS.container.styles}>
      <JSPaginationInfo />
      <JSSelect />
      <JSArrowButtons />
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

      <h3>JS API</h3>
      <div className="App-container column">
        <JSPaginationButtons />
      </div>

      <div className="App-container column">
        <JSAllPagination />
      </div>
    </div>
  )
}
