/* eslint-disable sonarjs/no-duplicate-string */

import { createRef } from 'react'
import { render, screen } from 'test-utils'
import {
  AlertDialog,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogCloseIconButton,
  AlertDialogHeading,
  AlertDialogLabel,
  AlertDialogText,
  AlertDialogCancel,
  AlertDialogConfirm,
} from '@react'

describe('AlertDialog', () => {
  test('should set the ref', () => {
    const ref = createRef<HTMLDialogElement>()
    render(
      <AlertDialog
        bodyId="bodyId"
        headingId="headingId"
        onClose={jest.fn()}
        ref={ref}
      >
        Alert
      </AlertDialog>,
    )

    expect(ref.current).not.toBeNull()
  })

  test('should render a dialog element with the correct aria attributes', () => {
    render(
      <AlertDialog
        bodyId="bodyId"
        headingId="headingId"
        onClose={jest.fn()}
        role="alertdialog"
      >
        Alert
      </AlertDialog>,
    )

    expect(screen.getByText(/alert/i)).toHaveAttribute('role', 'alertdialog')
    expect(screen.getByText(/alert/i)).toHaveAttribute(
      'aria-describedby',
      'bodyId',
    )
    expect(screen.getByText(/alert/i)).toHaveAttribute(
      'aria-labelledby',
      'headingId',
    )
  })
})

describe('AlertDialogHeader', () => {
  test('should set the ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <AlertDialogHeader kind="non-destructive" ref={ref}>
        Alert header
      </AlertDialogHeader>,
    )

    expect(ref.current).not.toBeNull()
  })

  test('should render a div element', () => {
    render(
      <AlertDialogHeader kind="destructive">Alert header</AlertDialogHeader>,
    )

    expect(screen.getByText(/alert header/i)).toBeInTheDocument()
  })

  test('should display a icon when kind is destructive', () => {
    render(
      <AlertDialogHeader kind="destructive">Alert header</AlertDialogHeader>,
    )
    expect(
      screen.getByRole('img', {
        hidden: true,
      }),
    ).toBeInTheDocument()
  })

  test('should not display a icon when kind is non-destructive', () => {
    render(
      <AlertDialogHeader kind="non-destructive">
        Alert header
      </AlertDialogHeader>,
    )
    expect(
      screen.queryByRole('img', {
        hidden: true,
      }),
    ).not.toBeInTheDocument()
  })
})

describe('AlertDialogBody', () => {
  test('should set the ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <AlertDialogBody id="test" ref={ref}>
        Alert body
      </AlertDialogBody>,
    )

    expect(ref.current).not.toBeNull()
  })

  test('should render a div element with aria-attributes', () => {
    render(<AlertDialogBody id="test">Alert body</AlertDialogBody>)

    expect(screen.getByText(/alert body/i)).toBeInTheDocument()
    expect(screen.getByText(/alert body/i)).toHaveAttribute('id', 'test')
  })
})

describe('AlertDialogFooter', () => {
  test('should set the ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(<AlertDialogFooter ref={ref}>Alert footer</AlertDialogFooter>)

    expect(ref.current).not.toBeNull()
  })

  test('should render a footer element', () => {
    render(<AlertDialogFooter>Alert footer</AlertDialogFooter>)
    expect(screen.getByText(/alert footer/i)).toBeInTheDocument()
  })
})

describe('AlertDialogCloseIconButton', () => {
  test('should set the ref', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<AlertDialogCloseIconButton ref={ref} />)

    expect(ref.current).not.toBeNull()
  })

  test('should render a button element with the correct aria attributes', () => {
    render(<AlertDialogCloseIconButton />)

    expect(
      screen.getByRole('button', {
        name: 'Close dialog',
      }),
    ).toBeInTheDocument()
  })
})

describe('AlertDialogHeading', () => {
  test('should set the ref', () => {
    const ref = createRef<HTMLHeadingElement>()
    render(<AlertDialogHeading ref={ref}>Alert heading</AlertDialogHeading>)

    expect(ref.current).not.toBeNull()
  })

  test('should render an h4 element with the correct aria attributes', () => {
    render(<AlertDialogHeading id="test-id">Alert heading</AlertDialogHeading>)

    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByText(/alert heading/i)).toHaveAttribute('id', 'test-id')
  })
})

describe('AlertDialogLabel', () => {
  test('should set the ref', () => {
    const ref = createRef<HTMLLabelElement>()
    render(
      <AlertDialogLabel htmlFor="test" ref={ref}>
        Alert label
      </AlertDialogLabel>,
    )
    expect(ref.current).not.toBeNull()
  })

  test('should render a label element with the correct aria attributes', () => {
    render(<AlertDialogLabel htmlFor="test-id">Alert label</AlertDialogLabel>)

    expect(screen.getByText(/alert label/i)).toHaveAttribute('for', 'test-id')
  })
})

describe('AlertDialogText', () => {
  test('should set the ref', () => {
    const ref = createRef<HTMLParagraphElement>()
    render(<AlertDialogText ref={ref}>Alert text</AlertDialogText>)

    expect(ref.current).not.toBeNull()
  })

  test('should render a p element', () => {
    render(<AlertDialogText>Alert text</AlertDialogText>)

    expect(screen.getByText(/alert text/i)).toBeInTheDocument()
  })
})

describe('AlertDialogCancel', () => {
  test('should set the ref', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<AlertDialogCancel ref={ref}>Alert cancel</AlertDialogCancel>)

    expect(ref.current).not.toBeNull()
  })

  test('should render a button element', () => {
    render(<AlertDialogCancel>Alert cancel</AlertDialogCancel>)
    expect(screen.getByText(/alert cancel/i)).toBeInTheDocument()
  })
})

describe('AlertDialogConfirm', () => {
  test('should set the ref', () => {
    const ref = createRef<HTMLButtonElement>()
    render(
      <AlertDialogConfirm kind="destructive" ref={ref}>
        Alert confirm
      </AlertDialogConfirm>,
    )

    expect(ref.current).not.toBeNull()
  })

  test('should render a button element', () => {
    render(
      <AlertDialogConfirm kind="non-destructive">
        Alert confirm
      </AlertDialogConfirm>,
    )
    expect(screen.getByText(/alert confirm/i)).toBeInTheDocument()
  })
})
