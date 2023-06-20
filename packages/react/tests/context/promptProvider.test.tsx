import { render, screen } from 'test-utils'
import { PromptProvider, usePrompt } from '@react'

describe('usePrompt', () => {
  it('throws an error when used outside of a PromptProvider', () => {
    function Test() {
      usePrompt()
      return null
    }

    expect(() => render(<Test />)).toThrow(
      'usePrompt must be used within a PromptProvider.'
    )
  })

  it('returns a function', () => {
    function Test() {
      const prompt = usePrompt()
      expect(typeof prompt.prompt).toBe('function')
      return null
    }

    render(
      <PromptProvider>
        <Test />
      </PromptProvider>
    )
  })
})

describe('PromptProvider', () => {
  // function Test() {
  //   const [confirmed, setConfirmed] = useState<boolean | null>(null)
  //   const { prompt } = usePrompt()

  //   async function handleClick() {
  //     try {
  //       const response = await prompt({
  //         bodyId: 'confirm-dialog-body',
  //         heading: 'ConfirmDialog heading',
  //         headingId: 'confirm-dialog',
  //         text: 'Are you sure?',
  //       })
  //       setConfirmed(response)
  //     } catch (error) {
  //       // ignore
  //     }
  //   }

  //   return (
  //     <div>
  //       <Show when={confirmed !== null} fallback={null}>
  //         <Show when={Boolean(confirmed)} fallback={<p>Did not confirm</p>}>
  //           <p>Did confirm</p>
  //         </Show>
  //       </Show>

  //       <button onClick={handleClick}>add thing</button>
  //     </div>
  //   )
  // }

  it('renders its children', () => {
    render(
      <PromptProvider>
        <div>child</div>
      </PromptProvider>
    )
    expect(screen.getByText('child')).toBeInTheDocument()
  })

  // TODO: Figure out how to properly mock this

  it.todo(
    'returns true when confirm is clicked'
    // render(
    //   <PromptProvider>
    //     <Test />
    //   </PromptProvider>
    // )

    // // open confirm
    // await userEvent.click(screen.getByRole('button', { name: /add thing/i }))
    // // confirm is open
    // const confirm = await screen.findByText(/confirmdialog heading/i)
    // expect(confirm).toBeInTheDocument()
    // // click confirm
    // await userEvent.click(screen.getByText('Confirm'))
    // expect(screen.getByText(/did confirm/i)).toBeInTheDocument()
  )

  it.todo(
    'returns false when cancel is clicked'
    // render(
    //   <PromptProvider>
    //     <Test />
    //   </PromptProvider>
    // )
    // // open confirm
    // await userEvent.click(screen.getByRole('button', { name: /add thing/i }))
    // // confirm is open
    // const confirm = await screen.findByText(/confirmdialog heading/i)
    // expect(confirm).toBeInTheDocument()
    // // click confirm
    // await userEvent.click(screen.getByText('Cancel'))
    // expect(screen.getByText(/did not confirm/i)).toBeInTheDocument()
  )
})
