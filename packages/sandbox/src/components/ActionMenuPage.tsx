import {
  getActionMenuWrapperStyles,
  getActionMenuButtonGroupStyles,
  getActionMenuButtonStyles,
  getActionMenuTriggerStyles,
} from '@pluralsight/headless-styles'
import { MenuProvider, MenuList, Option } from '@pluralsight/react'

// TODO: add styling

export default function ActionMenuPage() {
  return (
    <div>
      <h1>ActionMenuPage</h1>

      <MenuProvider>
        <div {...getActionMenuWrapperStyles()}>
          <div {...getActionMenuButtonGroupStyles()}>
            <button {...getActionMenuButtonStyles()}>Button 1</button>
            <button {...getActionMenuTriggerStyles()}>trigger</button>
          </div>

          <MenuList>
            <Option value="one">Option 1</Option>
            <Option value="two">Option 2</Option>
            <Option value="three">Option 3</Option>
          </MenuList>
        </div>
      </MenuProvider>
    </div>
  )
}
