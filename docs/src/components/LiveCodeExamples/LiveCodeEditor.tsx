import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { css } from '@/styled-system/css'

export default function LiveCodeEditor({
  componentString,
  scope,
  noInline,
}: {
  readonly componentString: string // the string of the component you would like to render
  readonly scope: Record<string, unknown> | undefined // the imports you would like to use in the live code editor
  readonly noInline?: boolean // used when you want to have control over exactly what is rendered
}) {
  return (
    <div className={css({ paddingTop: '6', paddingBottom: '4' })}>
      <LiveProvider scope={scope} code={componentString} noInline={!!noInline}>
        <LivePreview />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
    </div>
  )
}
