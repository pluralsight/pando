const psBackdrop = 'rgba(0 0 0 / 65%)'

export const alertDialog = {
  animationDelay: '100ms',
  bgColor: 'neutral.surface.100',
  borderColor: 'neutral.border.100',
  borderRadius: '8px',
  borderStyle: 'solid',
  borderWidth: '1px',
  color: 'neutral.text.initial',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'inherit',
  opacity: '0',
  paddingBottom: '1.5rem',
  paddingInlineEnd: '1.5rem',
  paddingInlineStart: '1.5rem',
  textAlign: 'left',
  dropShadow: 'lg',

  _backdrop: {
    bg: psBackdrop,
  },
}

export const dialogHeader = {
  alignItems: 'center',
  display: 'flex',
  marginBottom: '1.5rem',
}

export const dialogFooter = {
  marginTop: '1.5rem',
}
