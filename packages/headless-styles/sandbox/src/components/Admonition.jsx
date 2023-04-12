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
        <p {...admonition.title}>
          <strong>{props.admonitionTitle}</strong>
        </p>
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

function AdmonitionJS(props) {
  const admonition = getJSAdmonitionProps({ sentiment: props.sentiment })
  const { button, iconOptions } = getIconButtonProps(
    admonition.iconButtonOptions
  )

  return (
    <div style={admonition.wrapper.styles}>
      <span style={admonition.wrapper.styles['&::before']} />
      <span style={admonition.iconWrapper.styles}>
        <InfoCircleIcon {...getIconProps(admonition.iconOptions)} />
      </span>
      <div style={admonition.textContainer.styles}>
        <strong>
          <p style={admonition.title.styles}>{props.admonitionTitle}</p>
        </strong>
        <small style={admonition.description.styles}>{props.description}</small>
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
      console.log({ ...getJSAdmonitionProps({ sentiment: 'danger' }) })
    }
  }, [logJS])

  return (
    <div id="admonition">
      <h2>Admonition</h2>

      <h3>CSS</h3>
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

      <h3>JS</h3>
      <div className="App-container column">
        <AdmonitionJS
          admonitionTitle="Info admonition"
          description="This is an example info admonition about some information."
        />
        <br />
        <AdmonitionJS
          admonitionTitle="Info admonition"
          description="This is an example has a close button."
          showButton
        />
        <br />
        <AdmonitionJS
          admonitionTitle="Success admonition"
          description="Your information was saved."
          sentiment="success"
        />
        <br />
        <AdmonitionJS
          admonitionTitle="Warning admonition"
          description="Your changes have not been saved. Proceed with caution."
          sentiment="warning"
        />
        <br />
        <AdmonitionJS
          admonitionTitle="Danger admonition"
          description="Your file has been permanently deleted."
          sentiment="danger"
        />
      </div>
    </div>
  )
}
