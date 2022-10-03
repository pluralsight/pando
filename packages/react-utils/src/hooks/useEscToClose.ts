import { useEffect } from 'react'

export function useEscToClose(onClose: () => void) {
  useEffect(() => {
    function handleEscClose(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.stopPropagation()
        event.preventDefault()
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscClose, false)

    return () => {
      window.removeEventListener('keydown', handleEscClose, false)
    }
  }, [onClose])

  return null
}
