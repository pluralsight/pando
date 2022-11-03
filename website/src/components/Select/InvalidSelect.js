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

function InvalidSelect() {
  const [fruit, setFruit] = useState('')

  function handleChange(e) {
    setFruit(e.target.value)
  }

  return (
    <Container>
      <Select
        id="invalidSelect"
        label="Invalid select"
        name="fruit"
        value={fruit}
        options={options}
        placeholder="-- Choose a fruit --"
        required={true}
        invalid={fruit === ''}
        onChange={handleChange}
      />
    </Container>
  )
}

export default InvalidSelect
