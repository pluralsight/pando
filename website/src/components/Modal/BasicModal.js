import React, { useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { getButtonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'
import Modal from './Modal'
import Field from './Field'
import styles from './basicModal.module.css'

function LoginForm(props) {
  return (
    <form
      className={styles.form}
      style={{
        maxWidth: '80%',
        margin: '0 auto',
      }}
    >
      <Field
        autoComplete="username"
        id="username"
        label="Username"
        name="username"
      />

      <Field
        autoComplete="current-password"
        id="password"
        label="Password"
        name="password"
      />

      <div className={styles.formActions}>
        <button
          {...getButtonProps({ usage: 'outline' }).button}
          type="button"
          onClick={props.cancel}
        >
          Cancel
        </button>
        <button {...getButtonProps().button} type="submit">
          Log in
        </button>
      </div>
      <div style={{ textAlign: 'center' }}>
        <a href="#">Sign up</a>
      </div>
    </form>
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
            body={<LoginForm cancel={handleCloseModal} />}
            heading="Log in"
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
