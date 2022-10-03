import React, { useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { getButtonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'
import Modal from './Modal'

function BasicModal() {
  const triggerRef = useRef(null)
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

  function handleShowModal() {
    setShowModal(true)
  }

  return (
    <Container>
      <button
        {...getButtonProps().button}
        onClick={handleShowModal}
        ref={triggerRef}
      >
        Open Modal
      </button>

      {showModal &&
        createPortal(
          <Modal
            bodyId="normalModal-body"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac odio nec eros tempus venenatis a at velit. Integer non enim sit amet urna posuere pharetra. Cras in arcu orci. Nunc porttitor, libero eu bibendum semper, erat risus sollicitudin mauris, in condimentum mauris mauris vel nisi. Integer enim ante, sollicitudin a facilisis a, auctor a mauris. Vestibulum cursus, sapien quis ultricies suscipit, nisl mauris euismod nulla, id rhoncus mauris nisl blandit neque. Proin sagittis libero nisi, ut semper augue facilisis commodo. Cras non nisi porta nulla convallis suscipit. Sed felis tellus, molestie sed sodales at, euismod sit amet dui. "
            heading="Modal Heading"
            headerId="normalModal-header"
            id="normalModal"
            onClose={handleCloseModal}
            ref={triggerRef}
          />,
          document.body
        )}
    </Container>
  )
}

export default BasicModal
