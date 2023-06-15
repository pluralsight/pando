import { useRef } from 'react'
import {
  getAlertDialogProps,
  getAlertDialogHeaderProps,
  getAlertDialogHeadingProps,
  getAlertDialogBodyProps,
  getAlertDialogLabelProps,
  getAlertDialogInputProps,
  getAlertDialogFooterProps,
  getAlertDialogCancelButtonProps,
  getAlertDialogConfirmButtonProps,
} from '@pluralsight/headless-styles'
import { Button, Flex } from '@pluralsight/react'

function ConfirmFeature() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  // const [consent, setConsent] = useState<boolean | null>(null)
  // const [destructiveConsent, setDestructiveConsent] = useState<boolean | null>(
  //   null
  // )

  async function handleShowConfirm() {
    dialogRef.current?.showModal()
    // try {
    //   const userResponse = await confirm.show({
    //     bodyId: 'confirm:body',
    //     heading: 'Add new user to team?',
    //     headingId: 'confirm:heading',
    //     text: 'This will add a new user to the team.',
    //   })
    //   setConsent(userResponse)
    // } catch (error) {
    //   console.error(error)
    // }
  }

  async function handleShowDestructiveConfirm() {
    dialogRef.current?.showModal()
    console.log('show destructive confirm')
    // try {
    //   const userResponse = await confirm.show({
    //     bodyId: 'confirm:body',
    //     heading: 'Add new user to team?',
    //     headingId: 'confirm:heading',
    //     text: 'This will add a new user to the team.',
    //   })
    //   setConsent(userResponse)
    // } catch (error) {
    //   console.error(error)
    // }
  }

  return (
    <div>
      <Flex justify="space-between">
        <Button onClick={handleShowConfirm}>Confirm</Button>
        <Button onClick={handleShowDestructiveConfirm} sentiment="danger">
          Destructive confirm
        </Button>
      </Flex>

      <dialog
        {...getAlertDialogProps({
          headingId: 'confirm:heading',
          bodyId: 'confirm:body',
        })}
        ref={dialogRef}
      >
        <header {...getAlertDialogHeaderProps('non-destructive').header}>
          <h4 {...getAlertDialogHeadingProps('confirm:heading')}>Confirm</h4>
        </header>

        <p {...getAlertDialogBodyProps('confirm:body')}>
          This is a non-destructive confirm alert that will not delete anything
          or do anything destructive.
        </p>

        <form {...getAlertDialogFooterProps()}>
          <Flex gap={16} justify="flex-end">
            <Button
              {...getAlertDialogCancelButtonProps().btnOptions}
              type="submit"
              value="true"
            >
              Cancel
            </Button>
            <Button
              {...getAlertDialogConfirmButtonProps('non-destructive')
                .btnOptions}
              formMethod="dialog"
              value="false"
            >
              Confirm
            </Button>
          </Flex>
        </form>
      </dialog>
    </div>
  )
}

export default function ConfirmPage() {
  return (
    <div>
      <h2>ConfirmPage</h2>
      <ConfirmFeature />
    </div>
  )
}
