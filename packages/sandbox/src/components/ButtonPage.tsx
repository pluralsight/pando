import { Button } from '@pluralsight/react/dev'
import { PlaceholderIcon } from '@pluralsight/icons'

export default function ButtonPage() {
  return (
    <div id="button">
      <h3>Button</h3>
      <div className="App-container">
        <Button>Action</Button>
        <Button sentiment="default">Default</Button>
        <Button sentiment="danger">Danger</Button>
      </div>
      <div className="App-container">
        <Button disabled>Action</Button>
        <Button sentiment="default" disabled>
          Default
        </Button>
        <Button sentiment="danger" disabled>
          Danger
        </Button>
      </div>
      <div className="App-container">
        <Button sentiment="action" usage="outline">
          Action
        </Button>
        <Button sentiment="default" usage="outline">
          Default
        </Button>
        <Button sentiment="danger" usage="outline">
          Danger
        </Button>
      </div>
      <div className="App-container">
        <Button sentiment="action" usage="text">
          Action
        </Button>
        <Button sentiment="default" usage="text">
          Default
        </Button>
        <Button sentiment="danger" usage="text">
          Danger
        </Button>
      </div>

      <h4>Sizes</h4>
      <div className="App-container">
        <Button size="m">Action</Button>
        <Button sentiment="default" size="m">
          Default
        </Button>
        <Button sentiment="danger" size="m">
          Danger
        </Button>
      </div>
      <div className="App-container">
        <Button size="m">Filled</Button>
        <Button sentiment="default" usage="outline" size="m">
          Outline
        </Button>
        <Button sentiment="danger" usage="text" size="m">
          Text
        </Button>
      </div>

      <h4>With Icons</h4>
      <div className="App-container">
        <Button startIcon={PlaceholderIcon}>Action</Button>
        <Button sentiment="default" startIcon={PlaceholderIcon}>
          Default
        </Button>
        <Button sentiment="danger" endIcon={PlaceholderIcon}>
          Danger
        </Button>
      </div>
      <div className="App-container">
        <Button size="m" endIcon={PlaceholderIcon}>
          Action
        </Button>
        <Button sentiment="default" size="m" startIcon={PlaceholderIcon}>
          Default
        </Button>
        <Button sentiment="danger" size="m" endIcon={PlaceholderIcon}>
          Danger
        </Button>
      </div>
    </div>
  )
}
