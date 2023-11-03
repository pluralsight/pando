import { Badge } from '@pluralsight/react'
import { PlaceholderIcon, PencilIcon } from '@pluralsight/icons'

const badgeContent = (
  <div id="badge">
    <h3>Badge</h3>
    <div className="App-container">
      <Badge>default</Badge>
      <Badge sentiment="success">success</Badge>
      <Badge sentiment="warning">warning</Badge>
      <Badge sentiment="danger">danger</Badge>
      <Badge usage="outline">outline</Badge>
    </div>

    <div className="App-container">
      <Badge sentiment="default" usage="outline" size="xs">
        xs default outline
      </Badge>
      <Badge sentiment="success" usage="outline" size="xs">
        xs success outline
      </Badge>
      <Badge sentiment="warning" usage="outline" size="xs">
        xs warning outline
      </Badge>
      <Badge sentiment="danger" usage="outline" size="xs">
        xs danger outline
      </Badge>
      <Badge usage="outline" size="xs">
        xs default outline
      </Badge>
    </div>

    <div className="App-container">
      <Badge sentiment="success" icon={PlaceholderIcon}>
        success
      </Badge>
      <Badge icon={PencilIcon}>default</Badge>
      <Badge icon={PlaceholderIcon} usage="outline">
        outline
      </Badge>
    </div>

    <div className="App-container">
      <Badge sentiment="default" size="xs">
        xs default filled
      </Badge>
      <Badge sentiment="danger" usage="filled" size="xs">
        xs danger filled
      </Badge>
      <Badge usage="outline" size="xs">
        xs default outline
      </Badge>
    </div>
  </div>
)

export default function BadgePage() {
  return badgeContent
}
