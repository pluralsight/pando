import { useRef, type MouseEvent } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseIconButton,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogHeading,
  AlertDialogText,
  Button,
  Flex,
} from '@pluralsight/react'

export default function ModalPage() {
  const dialogRef = useRef<HTMLDialogElement>(null)

  function handleShowModal() {
    dialogRef.current?.showModal()
  }

  function handleCloseModal(e: MouseEvent<HTMLButtonElement | SVGSVGElement>) {
    e.preventDefault()
    dialogRef.current?.close()
  }

  return (
    <div>
      <h1>Modal</h1>
      <Button onClick={handleShowModal}>Show modal</Button>

      <AlertDialog bodyId="test:body" headingId="test:heading" ref={dialogRef}>
        <AlertDialogHeader>
          <AlertDialogHeading>Modal</AlertDialogHeading>
          <AlertDialogCloseIconButton onClick={handleCloseModal} />
        </AlertDialogHeader>

        <AlertDialogBody id="test:body">
          <AlertDialogText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            temporibus modi officia nulla libero voluptatibus? Deleniti, maxime.
            Optio laudantium nobis qui, eos repellat explicabo animi sit natus
            quia quam sequi!
          </AlertDialogText>
          <br />
          <AlertDialogText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            temporibus modi officia nulla libero voluptatibus? Deleniti, maxime.
            Optio laudantium nobis qui, eos repellat explicabo animi sit natus
            quia quam sequi!
          </AlertDialogText>
        </AlertDialogBody>

        <AlertDialogFooter>
          <form>
            <Flex gap={16} justify="flex-end">
              <Button formMethod="dialog" sentiment="default" usage="outline">
                Cancel
              </Button>
              <Button onClick={handleCloseModal} type="submit">
                OK
              </Button>
            </Flex>
          </form>
        </AlertDialogFooter>
      </AlertDialog>
    </div>
  )
}
