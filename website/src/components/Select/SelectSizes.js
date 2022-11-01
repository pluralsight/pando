import React, { useState } from 'react'
import Select from './Select'
import Container from '../Container/Container'

const mOptions = ['Spring', 'Summer', 'Winter', 'Fall']
const lOptions = ['Water', 'Fire', 'Air', 'Earth']

function SelectSizes() {
  const [mediumValue, setMediumValue] = useState(mOptions[0])
  const [largeValue, setLargeValue] = useState(lOptions[0])

  function handleMChange(e) {
    setMediumValue(e.target.value)
  }

  function handleLChange(e) {
    setLargeValue(e.target.value)
  }

  return (
    <Container type="column">
      <Select
        id="mediumSelect"
        label="Medium select"
        name="mediumSelect"
        size="m"
        onChange={handleMChange}
        options={mOptions}
        value={mediumValue}
      />
      <Select
        id="largeSelect"
        label="Large select"
        name="largeSelect"
        size="l"
        onChange={handleLChange}
        options={lOptions}
        value={largeValue}
      />
    </Container>
  )
}

export default SelectSizes
