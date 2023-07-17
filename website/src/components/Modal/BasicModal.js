import React, { useRef } from 'react'
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
import Container from '../Container/Container.js'

export default function BasicModal() {
  const dialogRef = useRef(null)

  function handleShowModal() {
    dialogRef.current?.showModal()
  }

  function handleCloseModal(e) {
    e.preventDefault()
    dialogRef.current?.close()
  }

  return (
    <Container>
      <Button onClick={handleShowModal}>Show modal</Button>

      <AlertDialog bodyId="test:body" headingId="test:heading" ref={dialogRef}>
        <AlertDialogHeader>
          <AlertDialogHeading>Some Custom Modal</AlertDialogHeading>
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
    </Container>
  )
}
