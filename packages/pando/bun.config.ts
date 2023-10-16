import { build } from 'bun'

await build({
  entrypoints: ['./index.mts'],
  outdir: './npm',
  target: 'node',
  format: 'esm',
})
