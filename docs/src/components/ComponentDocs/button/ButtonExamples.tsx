import { Button, createButtonIconProps } from '@pluralsight/react'
import { PlaceholderIcon } from '@pluralsight/react/icons'
import { vstack } from '@/styled-system/patterns'

const tempBtnIconContent = <PlaceholderIcon {...createButtonIconProps()} />

function TempButtonIcon() {
  return tempBtnIconContent
}

export function ButtonAnatomy() {
  return (
    <div className={vstack()}>
      <Button startIcon={<TempButtonIcon />}>Icon at start</Button>
      <Button endIcon={<TempButtonIcon />}>Icon at end</Button>
      <Button>No icon</Button>
    </div>
  )
}

export function DangerButton() {
  return <Button palette="danger">Danger Palette</Button>
}

export function ActionButton() {
  return <Button palette="action">Action Palette</Button>
}

export function NeutralButton() {
  return <Button palette="neutral">Neutral Palette</Button>
}

export function FilledButtons() {
  return (
    <div className={vstack()}>
      <Button>Filled</Button>
      <Button palette="neutral">Filled</Button>
      <Button palette="danger">Filled</Button>
    </div>
  )
}
