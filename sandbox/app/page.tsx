import { vstack } from '@/styled-system/patterns'

export default function Home() {
  return (
    <section
      data-testid="sandbox"
      className={vstack({
        color: 'neutral.text.100',
        justify: 'center',
        minH: 'full',
      })}
    >
      <p>Select a navigation item to begin.</p>
      <p>One day we can add keyboard shortcuts here like VS Code.</p>
    </section>
  )
}
