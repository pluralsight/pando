import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { css } from '@/styled-system/css'

export default function LiveCodeEditor({
  str,
  component,
}: {
  str: string
  component: Record<string, unknown> | undefined
}) {
  return (
    <div className={css({ paddingTop: '4', paddingBottom: '4' })}>
      <LiveProvider scope={component} code={str}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </div>
  )
}
