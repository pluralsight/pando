import { css } from '@/styled-system/css'
import LiveCodeEditor from '../LiveCodeEditor'

export default function zIndex({
  componentString,
}: {
  componentString: string
}) {
  const parentDiv = css({ position: 'relative', height: '200px' })
  const hide = css({ zIndex: 'hide' })
  const base = css({
    zIndex: 'base',
    border: '10px solid',
    borderColor: 'chartreuse',
    width: 'fit-content',
    padding: '3',
    borderRadius: 'md',
    position: 'absolute',
  })
  const decorator = css({
    zIndex: 'decorator',
    top: '50px',
    left: '50px',
    borderColor: 'darkgoldenrod',
  })
  const dropdown = css({ zIndex: 'dropdown' })
  const sticky = css({ zIndex: 'sticky' })
  const banner = css({ zIndex: 'banner' })
  const overlay = css({ zIndex: 'overlay' })
  const modal = css({ zIndex: 'modal' })
  const popover = css({ zIndex: 'popover' })
  const toast = css({ zIndex: 'toast' })
  const tooltip = css({
    zIndex: 'tooltip',
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
