import { screen, render } from 'test-utils'
import { For } from '@react'

describe('For', () => {
  test('renders children for each item in array', () => {
    const items = ['a', 'b', 'c']
    render(
      <For each={items}>{(item, index) => <div key={index}>{item}</div>}</For>,
    )
    expect(screen.getAllByText(/a|b|c/)).toHaveLength(3)
  })

  test('renders fallback when array is empty', () => {
    render(
      <For each={[]} fallback={<div>fallback</div>}>
        {() => <div>child</div>}
      </For>,
    )
    expect(screen.getByText('fallback')).toBeInTheDocument()
  })

  test('renders null when array is empty and no fallback', () => {
    render(<For each={[]}>{() => <div>child</div>}</For>)
    expect(screen.queryByText('child')).not.toBeInTheDocument()
  })
})
