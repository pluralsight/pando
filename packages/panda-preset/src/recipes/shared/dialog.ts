const psBackdrop = 'rgba(0 0 0 / 65%)'

export const alertDialog = {
  animationDelay: '100ms',
  bgColor: 'action.bg.100.initial',
  borderColor: 'action.bg.100.hover',
  borderRadius: '8px',
  borderStyle: 'solid',
  borderWidth: '1px',
  color: 'action.text.initial',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'inherit',
  maxWidth: '50ch',
  opacity: '0',
  paddingBottom: '1.5rem',
  paddingInlineEnd: '1.5rem',
  paddingInlineStart: '1.5rem',
  textAlign: 'left',

  _backdrop: {
    bg: psBackdrop,
  },
}

export const dialogHeader = {
  alignItems: 'center',
  display: 'flex',
  marginBottom: '1.5rem',
}

export const dialogTitleIcon = {
  color: 'danger.border.initial',
  lineHeight: 'initial',
  marginInlineEnd: '0.625rem',
}

export const dialogFooter = {
  marginTop: '1.5rem',
}
