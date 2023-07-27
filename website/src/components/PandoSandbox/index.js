import React, { Children, Suspense } from 'react'
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react'
import { nightOwl } from '@codesandbox/sandpack-themes'
import { autocompletion, completionKeymap } from '@codemirror/autocomplete'
import { createFileMap } from './createFileMap.js'

const pandoVersion = '0.5.1-next-74eedd'

const customSetup = {
  entry: '/index.tsx',
  dependencies: {
    '@pluralsight/headless-styles': pandoVersion,
    '@pluralsight/react': pandoVersion,
    '@pluralsight/icons': pandoVersion,
    'core-js': 'latest',
  },
}

const root = {
  code: `import React from "react";
import ReactDOM from "react-dom/client";
import 'core-js/stable';

import App from "./App";
import "./styles.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`,
  hidden: true,
}
const styles = {
  code: `@import url('https://fonts.pluralsight.com/ps-tt-commons/v1/ps-tt-commons-variable-roman.woff2');
  @import url('https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/fonts.css');
  @import url('https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/npm/normalize/normalize.css');

  body {
    padding: 1rem;
  }
  `,
  hidden: true,
}

export default function PandoSandbox(props) {
  const codeSnippets = Children.toArray(props.children)
  const files = createFileMap(codeSnippets)

  files['/index.tsx'] = root
  files['/styles.css'] = styles

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SandpackProvider
        customSetup={customSetup}
        files={files}
        template="vite-react-ts"
        theme={nightOwl}
      >
        <SandpackLayout>
          <SandpackCodeEditor
            extensions={[autocompletion()]}
            extensionsKeymap={[completionKeymap]}
            showTabs
            showLineNumbers
            showInlineErrors
            wrapContent
          />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </Suspense>
  )
}
