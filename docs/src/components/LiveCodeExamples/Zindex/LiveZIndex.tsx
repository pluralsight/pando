import { css } from '@/styled-system/css'
import LiveCodeEditor from '../LiveCodeEditor'

export default function zIndex({
  componentString,
}: {
  componentString: string
}) {
  const parentDiv = css({ position: 'relative', height: '200px' })
  const hide = css({ zIndex: '-1' })
  const base = css({
    zIndex: '0',
    border: '10px solid',
    borderColor: 'chartreuse',
    width: 'fit-content',
    padding: '3',
    borderRadius: 'md',
    position: 'absolute',
  })
  const decorator = css({
    zIndex: '50',
    top: '50px',
    left: '50px',
    borderColor: 'darkgoldenrod',
  })
  const dropdown = css({ zIndex: '1000' })
  const sticky = css({ zIndex: '1200' })
  const banner = css({ zIndex: '1300' })
  const overlay = css({ zIndex: '1400' })
  const modal = css({ zIndex: '1500' })
  const popover = css({ zIndex: '1600' })
  const toast = css({ zIndex: '1700' })
  const tooltip = css({
    zIndex: '1800',
    borderColor: 'firebrick',
    top: '100px',
    left: '100px',
  })

  const scope = {
    css,
    parentDiv,
    hide,
    base,
    decorator,
    dropdown,
    sticky,
    banner,
    overlay,
    modal,
    popover,
    toast,
    tooltip,
  }

  return <LiveCodeEditor scope={scope} componentString={componentString} />
}
