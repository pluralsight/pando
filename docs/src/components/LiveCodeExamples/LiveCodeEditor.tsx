import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { css } from '@/styled-system/css'

export default function LiveCodeEditor({
  componentString,
  scope,
}: {
  componentString: string // the string of the component you would like to render
  scope: Record<string, unknown> | undefined // the imports you would like to use in the live code editor
}) {
  return (
    <div className={css({ paddingTop: '6', paddingBottom: '4' })}>
      <LiveProvider scope={scope} code={componentString}>
        <LivePreview />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
    </div>
  )
}
