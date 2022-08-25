import { useEffect } from 'react'
import {
  getAdmonitionProps,
  getIconProps,
  getIconButtonProps,
  getJSAdmonitionProps,
} from '../../../src'
import { CloseIcon, InfoCircleIcon } from '@pluralsight/icons'

function AdmonitionEl(props) {
  const admonition = getAdmonitionProps({ sentiment: props.sentiment })
  const { button, iconOptions } = getIconButtonProps(
    admonition.iconButtonOptions
  )

  return (
    <div {...admonition.wrapper}>
      <span {...admonition.iconWrapper}>
        <InfoCircleIcon {...getIconProps(admonition.iconOptions)} />
      </span>
      <div {...admonition.textContainer}>
        <strong>
          <p {...admonition.title}>{props.admonitionTitle}</p>
        </strong>
        <small {...admonition.description}>{props.description}</small>
      </div>
      {props.showButton && (
        <button {...button}>
          <CloseIcon {...getIconProps(iconOptions)} />
        </button>
      )}
    </div>
  )
}

export default function Admonition({ logJS }) {
  useEffect(() => {
    if (logJS) {
      console.log({ ...getJSAdmonitionProps({ kind: 'danger' }) })
    }
  }, [logJS])

  return (
    <div id="admonition">
      <h3>Admonition</h3>
      <div className="App-container column">
        <AdmonitionEl
          admonitionTitle="Info admonition"
          description="This is an example info admonition about some information."
        />
        <br />
        <AdmonitionEl
          admonitionTitle="Info admonition"
          description="This is an example has a close button."
          showButton
        />
        <br />
        <AdmonitionEl
          admonitionTitle="Success admonition"
          description="Your information was saved."
          sentiment="success"
        />
        <br />
        <AdmonitionEl
          admonitionTitle="Warning admonition"
          description="Your changes have not been saved. Proceed with caution."
          sentiment="warning"
        />
        <br />
        <AdmonitionEl
          admonitionTitle="Danger admonition"
          description="Your file has been permanently deleted."
          sentiment="danger"
        />
      </div>
    </div>
  )
}
