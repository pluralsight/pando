import {
  useState,
  type SyntheticEvent,
  type PropsWithChildren,
  type InputHTMLAttributes,
} from 'react'
import { render, screen, userEvent } from 'test-utils'
import { useIsIndeterminate } from '../../src/index.ts'

describe('useIsIndeterminate', () => {
  function Checkbox(
    props: PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>
  ) {
    return (
      <label>
        <input
          checked={props.checked}
          id={props.id}
          onChange={props.onChange}
          type="checkbox"
        />
        {props.children}
      </label>
    )
  }

  function List() {
    const [selections, setSelections] = useState({
      one: false,
      two: false,
      three: false,
    })
    const isIndeterminate = useIsIndeterminate(selections)

    function handleChange(e: SyntheticEvent<HTMLInputElement>) {
      setSelections((prev) => {
        const key = (e.target as Element).id
        return {
          ...prev,
          [key]: !prev[key as keyof typeof prev],
        }
      })
    }

    return (
      <form>
        <div role="group">
          {Object.keys(selections).map((id) => (
            <Checkbox
              id={id}
              key={id}
              onChange={handleChange}
              checked={Boolean(selections[id as keyof typeof selections])}
            >
              {id}
            </Checkbox>
          ))}
        </div>
        <p data-is={isIndeterminate}>indeterminate</p>
      </form>
    )
  }

  function setup() {
    const user = userEvent.setup()
    render(<List />)
    return { user }
  }

  test('should return an initial false state', () => {
    setup()
    expect(screen.getByText(/one/i)).not.toBeChecked()
    expect(screen.getByText(/two/i)).not.toBeChecked()
    expect(screen.getByText(/three/i)).not.toBeChecked()
    expect(screen.getByText(/indeterminate/i)).toHaveAttribute(
      'data-is',
      'false'
    )
  })

  test('should return a true state when some items are checked', async () => {
    const { user } = setup()

    await user.click(screen.getByText(/one/i))
    await user.click(screen.getByText(/three/i))

    expect(screen.getByText(/indeterminate/i)).toHaveAttribute(
      'data-is',
      'true'
    )
  })

  test('should return a false state when all items are checked', async () => {
    const { user } = setup()

    await user.click(screen.getByText(/one/i))
    await user.click(screen.getByText(/two/i))
    await user.click(screen.getByText(/three/i))

    expect(screen.getByText(/indeterminate/i)).toHaveAttribute(
      'data-is',
      'false'
    )
  })
})
