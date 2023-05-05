import { type MouseEvent } from 'react'
import {
  Admonition,
  AdmonitionHeading,
  AdmonitionText,
} from '@pluralsight/react/dev'

export default function AdmonitionPage() {
  function handleClose(e: MouseEvent<HTMLButtonElement>) {
    console.log('close', e)
  }

  return (
    <div>
      <h1>Admonition</h1>
      <div>
        <Admonition sentiment="info">
          <AdmonitionHeading>Info</AdmonitionHeading>
          <AdmonitionText>
            This is an admonition with a long informational message.
          </AdmonitionText>
        </Admonition>

        <br />

        <Admonition sentiment="success" onClose={handleClose}>
          <AdmonitionHeading>Success</AdmonitionHeading>
          <AdmonitionText>
            This is an admonition with a long successful message about a tip or
            something?
          </AdmonitionText>
        </Admonition>

        <br />

        <Admonition sentiment="warning">
          <AdmonitionHeading>Warning</AdmonitionHeading>
          <AdmonitionText>
            Your payment method is about to expire. Please update your payment
            on file.
          </AdmonitionText>
        </Admonition>

        <br />

        <Admonition sentiment="danger">
          <AdmonitionHeading>Danger</AdmonitionHeading>
          <AdmonitionText>
            Your account has been suspended. Please contact support to resolve
            this issue.
          </AdmonitionText>
        </Admonition>
      </div>
    </div>
  )
}
