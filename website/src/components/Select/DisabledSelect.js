import React, { useState } from 'react'
import Container from '../Container/Container'
import Select from './Select'

const options = [
  'apple',
  'orange',
  'banana',
  'strawberry',
  'grape',
  'blueberry',
  'raspberry',
]

function DisabledSelect() {
  const [fruit, setFruit] = useState('')

  function handleChange(e) {
    setFruit(e.target.value)
  }

  return (
    <Container>
      <Select
        disabled={true}
        id="disabledSelect"
        label="Disabled select"
        name="fruit"
        value={fruit}
        options={options}
        onChange={handleChange}
      />
    </Container>
  )
}

export default DisabledSelect
