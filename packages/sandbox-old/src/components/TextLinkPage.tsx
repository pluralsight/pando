import { TextLink } from '@pluralsight/react'

export default function TextLinkPage() {
  return (
    <div id="text-link">
      <h3>TextLink</h3>
      <div className="App-container">
        <TextLink href="/">Internal link</TextLink>
        <br />
        <TextLink href="https://www.google.com">Google</TextLink>
      </div>
    </div>
  )
}
