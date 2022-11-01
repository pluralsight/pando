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

function BasicSelect() {
  const [fruit, setFruit] = useState(options[0])

  function handleChange(e) {
    setFruit(e.target.value)
  }

  return (
    <Container>
      <Select
        id="basicSelect"
        label="Basic select"
        name="fruit"
        onChange={handleChange}
        options={options}
        value={fruit}
      />
    </Container>
  )
}

export default BasicSelect
