import React, { useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { getButtonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'
import Modal from './Modal'

function LoginForm() {
  return (
    <div>
      <p>
        Cillum aliquip enim exercitation consequat pariatur anim anim eiusmod
        enim. Do tempor dolore ullamco duis est tempor reprehenderit aute
        pariatur. Officia ex ullamco amet exercitation ea incididunt amet
        proident aliqua excepteur sint velit occaecat non. Proident id tempor
        dolore excepteur. Pariatur irure commodo occaecat consequat nulla
        aliquip officia reprehenderit velit. Mollit aliquip ex voluptate veniam
        veniam amet laborum duis magna nulla amet ex. Minim do ullamco culpa
        minim veniam sunt incididunt excepteur sit ipsum anim.
      </p>
      <p>
        Velit aliquip ea anim nulla aute est sunt elit velit id. Proident non in
        quis id nulla excepteur Lorem voluptate excepteur tempor velit pariatur
        deserunt. Sunt excepteur dolor consectetur veniam do tempor laboris
        ipsum velit.
      </p>
      <p>
        Voluptate esse et officia eiusmod ullamco ullamco aliquip sit proident
        adipisicing eiusmod. Consectetur quis tempor velit nulla magna aliquip
        Lorem laboris commodo. Commodo eiusmod consequat proident ex velit
        veniam elit dolor ea sint labore. Consequat consectetur labore esse do
        in voluptate esse culpa do veniam reprehenderit duis tempor. Sunt cillum
        enim quis veniam. Nostrud Lorem commodo nostrud veniam sit Lorem fugiat
        et quis do culpa cillum nisi.
      </p>
    </div>
  )
}

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
            body={<LoginForm />}
            heading="More information about stuff"
            headingId="normalModal-header"
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
