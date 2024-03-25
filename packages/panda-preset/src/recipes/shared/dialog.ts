const psBackdrop = 'rgba(0 0 0 / 65%)'

const DIALOG_WHITESPACE = '24px'

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
  paddingBottom: DIALOG_WHITESPACE,
  paddingInlineEnd: DIALOG_WHITESPACE,
  paddingInlineStart: DIALOG_WHITESPACE,
  textAlign: 'left',
  dropShadow: 'lg',

  _backdrop: {
    bg: psBackdrop,
  },
}

export const dialogHeader = {
  alignItems: 'center',
  display: 'flex',
  marginBottom: '16px',
  marginTop: '40px',
}

export const dialogFooter = {
  marginTop: DIALOG_WHITESPACE,
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '16px',
}
