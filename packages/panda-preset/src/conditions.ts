export const conditions = {
  // themes
  inkyBlueTheme: '[data-theme=inkyBlue] &',

  // modes
  lightMode: '[data-color-mode=light] &, &.light, .light &',
  darkMode: '[data-color-mode=dark] &, &.dark, .dark &',

  // states
  modalOpen: '&:is([data-modal-open=true])',
  screenReaderOnly: '&:is([data-screen-reader-only=true])',
  invalid: '&:is(:invalid, [data-invalid], [aria-invalid])',
  userInvalid: '&:is(:user-invalid, [aria-invalid])',
  groupInvalid: '.group:is([data-invalid] &, [aria-invalid]) &',
  groupChecked: '.group:is([data-checked="true"] &, [aria-checked="true"]) &',

  // elements
  startIcon: '&:is([data-start-icon=true])',

  // positions
  positionBottom: '&:is([data-position=bottom])',
  positionTop: '&:is([data-position=top])',
  positionLeft: '&:is([data-position=left])',
  positionRight: '&:is([data-position=right])',
}
