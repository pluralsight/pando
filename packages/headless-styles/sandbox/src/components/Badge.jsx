import { useEffect } from 'react'
import { getBadgeProps, getJSBadgeProps } from '../../../src'

export default function Badge({ logJS }) {
  useEffect(() => {
    if (logJS) {
      console.log({
        ...getJSBadgeProps({
          sentiment: 'action',
          usage: 'outline',
          size: 'xs',
        }),
      })
    }
  }, [logJS])

  return (
    <div id="badge">
      <h3>Badge</h3>
      <div className="App-container">
        <span {...getBadgeProps({ sentiment: 'action' }).badge}>action</span>
        <span {...getBadgeProps().badge}>default</span>
        <span {...getBadgeProps({ usage: 'outline' }).badge}>outline</span>
      </div>
      <div className="App-container">
        <span {...getBadgeProps({ sentiment: 'action', size: 'xs' }).badge}>
          xs action filled
        </span>
        <span {...getBadgeProps({ usage: 'filled', size: 'xs' }).badge}>
          xs default filled
        </span>
        <span {...getBadgeProps({ usage: 'outline', size: 'xs' }).badge}>
          xs default outline
        </span>
      </div>
    </div>
  )
}
