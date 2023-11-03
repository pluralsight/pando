import { useRef, type MouseEvent } from 'react'
import {
  AlertDialogBody,
  AlertDialogCloseIconButton,
  AlertDialogHeader,
  AlertDialogHeading,
  AlertDialogText,
  Button,
  TextLink,
  PopoverContent,
  PopoverProvider,
} from '@pluralsight/react'

export default function PopoverPage() {
  const popoverRef = useRef<HTMLDialogElement>(null)

  function handleShowPopover() {
    popoverRef.current?.show()
  }

  function handleClosePopover(
    e: MouseEvent<HTMLButtonElement | SVGSVGElement>,
  ) {
    e.preventDefault()
    popoverRef.current?.close()
  }

  return (
    <div>
      <h1>Popover</h1>

      <PopoverProvider position="left">
        <Button onClick={handleShowPopover}>Show popover</Button>

        <PopoverContent
          bodyId="popover:body"
          headingId="popover:heading"
          ref={popoverRef}
        >
          <AlertDialogHeader>
            <AlertDialogHeading id="popover:heading">
              Popover heading
            </AlertDialogHeading>
            <AlertDialogCloseIconButton onClick={handleClosePopover} />
          </AlertDialogHeader>

          <AlertDialogBody id="popover:body">
            <AlertDialogText>
              Text content for a popover component. Some additional text with an{' '}
              <TextLink href="#">Text Link</TextLink>.
            </AlertDialogText>
            <br />
            <Button onClick={handleClosePopover} size="m">
              Something
            </Button>
          </AlertDialogBody>
        </PopoverContent>
      </PopoverProvider>
    </div>
  )
}
