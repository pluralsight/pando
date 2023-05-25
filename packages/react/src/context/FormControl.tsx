import {
  createContext,
  useContext,
  useMemo,
  type InputHTMLAttributes,
  type PropsWithChildren,
} from 'react'

interface FormControlContextValue
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'disabled' | 'readOnly' | 'required'
  > {
  invalid?: boolean
}

const FormControlContext = createContext<FormControlContextValue | null>(null)

export function FormControlProvider(
  props: PropsWithChildren<FormControlContextValue>
) {
  const { children, ...formControlInitialValues } = props

  const value = useMemo(
    () => ({
      ...formControlInitialValues,
    }),
    [formControlInitialValues]
  )

  return (
    <FormControlContext.Provider value={value}>
      {children}
    </FormControlContext.Provider>
  )
}

// hooks

export function useFormControl() {
  const context = useContext(FormControlContext)

  if (!context) {
    throw new Error('useFormControl must be used within a FormControlProvider')
  }

  return context
}
