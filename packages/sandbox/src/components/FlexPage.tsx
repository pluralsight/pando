import { Flex, FlexItem } from '@pluralsight/react'

function StyledFlexItem(props: Record<string, unknown>) {
  return (
    <FlexItem
      {...props}
      style={{
        backgroundColor: 'var(--ps-surface-medium)',
        padding: '1rem',
      }}
    />
  )
}

export default function FlexPage() {
  return (
    <div>
      <h1>Flex</h1>

      <h2>Default</h2>
      <Flex>
        <StyledFlexItem>one</StyledFlexItem>
        <StyledFlexItem>two</StyledFlexItem>
        <StyledFlexItem>three</StyledFlexItem>
      </Flex>

      <h2>Custom row</h2>
      <Flex gap={8} justify="space-between">
        <StyledFlexItem>one</StyledFlexItem>
        <StyledFlexItem>two</StyledFlexItem>
        <StyledFlexItem>three</StyledFlexItem>
      </Flex>

      <h2>Default column</h2>
      <Flex direction="column">
        <StyledFlexItem>one</StyledFlexItem>
        <StyledFlexItem>two</StyledFlexItem>
        <StyledFlexItem>three</StyledFlexItem>
      </Flex>

      <h2>Custom column</h2>
      <Flex direction="column-reverse" justify="space-evenly">
        <StyledFlexItem>one</StyledFlexItem>
        <StyledFlexItem>two</StyledFlexItem>
        <StyledFlexItem>three</StyledFlexItem>
      </Flex>
    </div>
  )
}
