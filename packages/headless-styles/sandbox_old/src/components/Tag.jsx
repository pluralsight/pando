import { useEffect } from 'react'
import { PlaceholderIcon } from '@pluralsight/icons'
import { getIconProps, getJSTagProps, getTagProps } from '../../../src'

function TagEl(props) {
  const { children, href, ...tagOptions } = props
  const tagProps = getTagProps(tagOptions)

  return (
    <a href={href} {...tagProps.tag}>
      <PlaceholderIcon {...getIconProps(tagProps.iconOptions)} />
      {children}
    </a>
  )
}

export default function Tag({ logJS }) {
  useEffect(() => {
    if (logJS) {
      console.log(
        getJSTagProps({
          size: 's',
        })
      )
    }
  }, [logJS])

  return (
    <div id="tag">
      <h3>Tag</h3>
      <div className="App-container">
        <TagEl href="#tag" size="s">
          small
        </TagEl>
        <TagEl href="#top">medium</TagEl>
      </div>
    </div>
  )
}
