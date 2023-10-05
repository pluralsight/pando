await Bun.build({
  entrypoints: ['./index.mts'],
  outdir: './npm',
  target: 'node',
  format: 'esm',
})
