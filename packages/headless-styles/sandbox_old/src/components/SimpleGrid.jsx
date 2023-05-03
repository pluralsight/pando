export default function SimpleGrid(props) {
  const columnCount = props.cols ?? 3

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
        gridAutoFlow: 'row',
        gap: '1rem',
        width: '50rem',
        margin: '0 auto',
      }}
    >
      {props.children}
    </div>
  )
}
