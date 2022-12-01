### React Performance Requirements

To ensure you are keeping your app as performant as possible, there are a few helpers you will need to include in your code to deliver the highest quality result.

#### Use React-utils

We have a helper package @pluralsight/react-utils that you can use (we include this in the expanded basic code example) which contains custom hooks and other helpers to reduce your code base and keep the modal a11y compliant.

- [`useFocusTrap`](../react-utils/use-focus-trap.mdx) - custom hook that keeps the focus trapped within a modal when it is active. When the modal is closed, it returns focus to the component that triggered the modal to open.
- [`useEscToClose`](../react-utils/use-esc-to-close.mdx) - custom hook that registers an event to close the modal when the "Escape" key is pressed.

#### Use Callbacks

Whenever you pass a function into another **custom** component as one of its props, wrap the function in a [`useCallback` hook](https://reactjs.org/docs/hooks-reference.html#usecallback). This is a recommended practice to help reduce unnecessary re-rendering/commiting in React apps.

```jsx title="Using a Callack hook when passing functions as props"
function BasicConfirmDialog() {
  const triggerRef = useRef(null)
  const [showAlert, setShowDialog] = useState(false)

  // highlight-start
  const handleCloseDialog = useCallback(() => {
    setShowDialog(false)
  }, [])
  // highlight-end

  function handleShowDialog() {
    setShowDialog(true)
  }

  return (
    <Container>
      <button
        {...getButtonProps().button}
        onClick={handleShowDialog}
        ref={triggerRef}
      >
        Confirm payment
      </button>

      {showAlert &&
        createPortal(
          <ConfirmDialog
            dialogTitle="Confirm payment"
            bodyId="normal-dialog-body"
            body="Are you sure? This action can't be undone."
            confirmText="Charge card"
            headerId="normal-dialog-header"
            id="normaldialog"
            // highlight-next-line
            onClose={handleCloseDialog}
            ref={triggerRef}
          />,
          document.body
        )}
    </Container>
  )
}
```

#### Use ForwardRef

Due to the nature of how React works with passing Ref Objects, in order for the `useFocusTrap` hook to work, you need to wrap your modal component in the [`forwardRef` function](https://reactjs.org/docs/forwarding-refs.html#gatsby-focus-wrapper) to ensure the `triggerRef` has successfully passed into your component for use in the custom hook.

:::caution

Not using `forwardRef` will prevent some functionality of the hook from working. **It will not break your app**, but the hook will not return the focus back to the original trigger which opened it (i.e. your app will not be a11y compliant).

:::

```javascript title="Example using forwardRef"
const Modal = forwardRef(ModalEl)
```

#### Use Memo

Lastly, you should wrap your ForwardedRef Component with the `memo` function to ensure your modal component does not unnecessarily re-render/commit from the complex properties that may be passed in. This is another good practice that should become second nature when building components that accept complex properties (i.e., anything that is not a [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)).

```javascript title="Example using memo with forwardRef"
const Modal = memo(forwardRef(ModalEl))
```
