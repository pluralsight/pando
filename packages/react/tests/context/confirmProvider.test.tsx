import { render, screen } from 'test-utils'
import { ConfirmProvider, useConfirm } from '@react'

describe('useConfirm', () => {
  it('throws an error when used outside of a ConfirmProvider', () => {
    function Test() {
      useConfirm()
      return null
    }

    expect(() => render(<Test />)).toThrow(
      'useConfirm must be used within a ConfirmProvider.'
    )
  })

  it('returns a function', () => {
    function Test() {
      const confirm = useConfirm()
      expect(typeof confirm.confirm).toBe('function')
      return null
    }

    render(
      <ConfirmProvider>
        <Test />
      </ConfirmProvider>
    )
  })
})

describe('ConfirmProvider', () => {
  // function Test() {
  //   const [confirmed, setConfirmed] = useState<boolean | null>(null)
  //   const { confirm } = useConfirm()

  //   async function handleClick() {
  //     try {
  //       const response = await confirm({
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
      <ConfirmProvider>
        <div>child</div>
      </ConfirmProvider>
    )
    expect(screen.getByText('child')).toBeInTheDocument()
  })

  // TODO: Figure out how to properly mock this

  it.todo(
    'returns true when confirm is clicked'
    // render(
    //   <ConfirmProvider>
    //     <Test />
    //   </ConfirmProvider>
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
    //   <ConfirmProvider>
    //     <Test />
    //   </ConfirmProvider>
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
