/* eslint-disable jsx-a11y/no-autofocus */
// import { useRef, type SyntheticEvent } from 'react'
// import { render, screen, userEvent } from 'test-utils'
// import { useFocusTrap } from '@react-utils'

describe('useFocusTrap', () => {
  // function Test() {
  //   const dialogRef = useRef<HTMLDialogElement>(null)
  //   const { onKeyDown } = useFocusTrap(dialogRef)

  //   function handleShowAlert() {
  //     dialogRef.current?.showModal()
  //   }

  //   function handleConfirm(e: SyntheticEvent<HTMLButtonElement>) {
  //     e.preventDefault()
  //     dialogRef.current?.close()
  //   }

  //   return (
  //     <div>
  //       <button onClick={handleShowAlert} type="button">
  //         trigger
  //       </button>
  //       <div>
  //         <button type="button">background 1</button>
  //         <button type="button">background 2</button>
  //         <button type="button">background 3</button>
  //       </div>

  //       <dialog onKeyDown={onKeyDown} ref={dialogRef}>
  //         <header>
  //           <h4>Alert heading</h4>
  //         </header>
  //         <p>Alert body text.</p>
  //         <footer>
  //           <form>
  //             <button
  //               autoFocus={true}
  //               formMethod="dialog"
  //               type="button"
  //               value="false"
  //             >
  //               cancel
  //             </button>
  //             <button type="submit" onClick={handleConfirm} value="true">
  //               action
  //             </button>
  //           </form>
  //         </footer>
  //       </dialog>
  //     </div>
  //   )
  // }

  // TODO: Figure out why Jest is not able to find the dialog element
  // this is working with the confirm hook

  test.todo(
    'hook should trap focus in UI alert dialog component'
    // render(<Test />)

    // await userEvent.click(screen.getByText(/trigger/i))
    // // confirm is open
    // const confirm = await screen.findByText(/alert heading/i)
    // expect(confirm).toBeInTheDocument()

    // expect(screen.getByText(/cancel/i)).toHaveFocus()

    // await userEvent.tab()
    // expect(screen.getByText(/action/i)).toHaveFocus()
    // // validate cannot focus on other buttons outside of alert
    // await userEvent.tab()
    // expect(screen.getByText(/cancel/i)).toHaveFocus()

    // await userEvent.tab()
    // expect(screen.getByText(/action/i)).toHaveFocus()
  )

  test.todo(
    'hook should focus first focusable item when dialog opened'
    // render(<Test />)

    // await userEvent.click(screen.getByText(/trigger/i))
    // // confirm is open
    // const confirm = await screen.findByText(/alert heading/i)
    // expect(confirm).toBeInTheDocument()
    // expect(screen.getByText(/cancel/i)).toHaveFocus()
  )
})
