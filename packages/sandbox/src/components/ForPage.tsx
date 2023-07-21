import { useState } from 'react'
import { For, Button, Flex } from '@pluralsight/react'

export default function ForPage() {
  const [items, setItems] = useState([1, 2, 3])

  function handleClear() {
    setItems([])
  }

  return (
    <Flex align="center" justify="space-between">
      <Flex align="center" justify="space-evenly">
        <For each={items} fallback={<div>Nothing to see here</div>}>
          {(num) => <div>{num}</div>}
        </For>
      </Flex>

      <Flex align="center" gap={8}>
        <Button sentiment="default" onClick={handleClear}>
          Clear
        </Button>
        <Button onClick={() => setItems([...items, items.length + 1])}>
          Add
        </Button>
      </Flex>
    </Flex>
  )
}
