import { render, screen } from 'test-utils'
import {
  Alert,
  AlertHeader,
  AlertBody,
  AlertFooter,
  AlertHeading,
  AlertText,
  AlertLabel,
  AlertActionButton,
  AlertCancelButton,
  AlertInput,
} from '@react'
import { ForwardedRef } from 'react'

describe('AlertInput', () => {
  it('renders an input', () => {
    render(<AlertInput id="test" name="test" confirmKey="test" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})

describe('AlertActionButton', () => {
  it('renders a button', () => {
    render(<AlertActionButton>test</AlertActionButton>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})

describe('AlertCancelButton', () => {
  it('renders a button', () => {
    render(<AlertCancelButton>test</AlertCancelButton>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})

describe('AlertLabel', () => {
  it('renders a label', () => {
    render(<AlertLabel>test</AlertLabel>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
})

describe('AlertText', () => {
  it('renders a paragraph', () => {
    render(<AlertText>test</AlertText>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
})

describe('AlertHeading', () => {
  it('renders a heading', () => {
    render(<AlertHeading id="test">test</AlertHeading>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})

describe('AlertFooter', () => {
  it('renders a footer', () => {
    render(<AlertFooter>test</AlertFooter>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
})

describe('AlertBody', () => {
  it('renders a div', () => {
    render(<AlertBody id="test">test</AlertBody>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
})

describe('AlertHeader', () => {
  it('renders a header', () => {
    render(<AlertHeader>test</AlertHeader>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
})

describe('Alert', () => {
  const handleCloseAlert = jest.fn()

  interface ConfirmDialogProps {
    onClose: () => void
  }

  function ConfirmDialog(
    props: ConfirmDialogProps,
    triggerRef: ForwardedRef<HTMLButtonElement>
  ) {
    return (
      <Alert
        bodyId="non-destructiveAlert-body"
        headingId="non-destructiveAlert-heading"
        id="non-destructive-alert"
        onClose={props.onClose}
        ref={triggerRef}
      >
        <AlertHeader kind="non-destructive">
          <AlertHeading id="non-destructiveAlert-heading">
            Non-destructive Alert
          </AlertHeading>
        </AlertHeader>
        <AlertBody id="non-destructiveAlert-body">
          <AlertText>
            This is a non-destructive alert. It is used to confirm an action and
            this one specifically is very wordy with a lot of words whic is
            typically not good.
          </AlertText>
        </AlertBody>
        <AlertFooter>
          <AlertCancelButton onClick={props.onClose}>Cancel</AlertCancelButton>
          <AlertActionButton kind="non-destructive">Confirm</AlertActionButton>
        </AlertFooter>
      </Alert>
    )
  }

  it('renders an alert', () => {
    render(<ConfirmDialog onClose={handleCloseAlert} />)
    expect(screen.getByRole('alertdialog')).toBeInTheDocument()
    screen.getByText(/cancel/i).click()
    expect(handleCloseAlert).toHaveBeenCalledTimes(2)
  })
})
