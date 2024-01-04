export function createLabelText(value = '', required?: boolean) {
  return required ? `${value} (required)` : value
}
