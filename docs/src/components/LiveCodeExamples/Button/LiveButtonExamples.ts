export const liveButtonExample = `// import { Button } from '@pluralsight/react' <- for example purposes only
// import { hstack } from '@/styled-system/patterns' <- for example purposes only

<div className={hstack({ gap: '4' })}>
  <Button usage="outline">Cancel</Button>
  <Button>Submit</Button>
</div>
`

export const liveIconButtonExample = `// import { IconButton, Button } from '@pluralsight/react' <- for example purposes only
// import { ShareIcon } from '@pluralsight/react/icons' <- for example purposes only
// import { hstack } from '@/styled-system/patterns' <- for example purposes only

<div className={hstack({ gap: '4' })}>
  <IconButton ariaLabel="share">
    <ShareIcon />
  </IconButton>
  <Button usage="outline">Cancel</Button>
  <Button>Submit</Button>
</div>
`

export const liveAlignmentExample = `// import { Button } from '@pluralsight/react' <- for example purposes only
// import { ArrowRightIcon } from '@pluralsight/react/icons' <- for example purposes only
// import { hstack } from '@/styled-system/patterns' <- for example purposes only

<div className={hstack({ bg: 'neutral.surface.200', paddingY: '10', paddingX: '5', gap: '4', justifyContent: 'hstack-end', borderRadius: 'md' })}>
  <Button usage="text">Cancel</Button>
  <Button usage="outline">Submit</Button>
  <Button>
    Step 2 <ArrowRightIcon />
  </Button>
</div>
`

export const liveFocusedTaskExample = `// import { Button, FormControlProvider, Label, Input } from '@pluralsight/react' <- for example purposes only
// import { hstack } from '@/styled-system/patterns' <- for example purposes only
// import { css } from '@/styled-system/css' <- for example purposes only

<div className={css({ bg: 'neutral.surface.200', paddingY: '10', paddingX: '5', borderRadius: 'md' })}>
  <FormControlProvider>
    <Label htmlFor="job-title">Job title (required)</Label>
    <Input name="job-title" id="job-title" type="text" aria-required />
    <Label htmlFor="company-name">Company name</Label>
    <Input name="company-name" id="company-name" type="text" />
    <div className={hstack({ gap: '4' })}>
      <Button>Save</Button>
      <Button usage="outline">Cancel</Button>
    </div>
  </FormControlProvider>
</div>
`

export const liveButtonSpacingExample = `// import { Button } from '@pluralsight/react' <- for example purposes only
// import { ArrowRightIcon } from '@pluralsight/react/icons' <- for example purposes only
// import { hstack } from '@/styled-system/patterns' <- for example purposes only

<div className={hstack({ gap: '4' })}>
  <Button usage="text">Cancel</Button>
  <Button usage="outline">Edit</Button>
  <Button>
    Submit <ArrowRightIcon />
  </Button>
</div>
`

export const liveLoadingButtonExample = `// import { Button } from '@pluralsight/react' <- for example purposes only
// import { PlaceholderIcon } from '@pluralsight/react/icons' <- for example purposes only
// import {css} from '@/styled-system/css' <- for example purposes only

<Button className={css({ cursor: 'not-allowed' })} disabled>
  <PlaceholderIcon /> Loading...
</Button>
`

export const liveSubmitExample = `// import { Button } from '@pluralsight/react' <- for example purposes only

<Button>Submit</Button>`

export const liveFourBtnExample = `// import { Button } from '@pluralsight/react' <- for example purposes only
// import { hstack } from '@/styled-system/patterns' <- for example purposes only

<div className={hstack({ bg: 'neutral.surface.200', paddingX: '5', paddingY: '5', borderRadius: 'md', gap: '4' })}>
  <Button usage="text">Cancel</Button>
  <Button usage="outline">Undo</Button>
  <Button usage="outline">Next</Button>
  <Button>Submit</Button>
</div>
`

export const liveNavBtnExample = `// import { Button } from '@pluralsight/react' <- for example purposes only

<Button>Go home</Button>`

export const liveWrongSpacingExample = `// import { Button } from '@pluralsight/react' <- for example purposes only
// import { hstack } from '@/styled-system/patterns' <- for example purposes only

<>
  <div className={hstack({ gap: '6' })}>
    <Button usage="outline">Cancel</Button>
    <Button>Submit</Button>
  </div>
  <div className={hstack({ gap: '2' })}>
    <Button usage="outline">Cancel</Button>
    <Button>Submit</Button>
  </div>
</>
`

export const liveActionExample = `// import { Button } from '@pluralsight/react' <- for example purposes only

<Button>Submit</Button>`

export const liveActionWrongExample = `// import { Button } from '@pluralsight/react' <- for example purposes only

<Button palette="neutral">Submit</Button>`

export const liveDangerExample = `// import { Button } from '@pluralsight/react' <- for example purposes only

<Button palette="danger">Delete forever!!! Muahaha</Button>`

export const liveDangerWrongExample = `// import { Button } from '@pluralsight/react' <- for example purposes only

<Button palette="neutral">Delete forever!!! Muahaha</Button>`

export const liveOutlineExample = `// import { Button } from '@pluralsight/react' <- for example purposes only
// import { hstack } from '@/styled-system/patterns' <- for example purposes only

<div class={hstack({ gap: '4' })}>
  <Button usage="outline">+ Add Row</Button>
  <Button>Submit</Button>
</div>
`

export const liveOutlineWrongExample = `// import { Button } from '@pluralsight/react' <- for example purposes only
// import { hstack } from '@/styled-system/patterns' <- for example purposes only

<div class={hstack({ gap: '4' })}>
  <Button palette="danger" usage="outline">
    Throw away progress
  </Button>
  <Button>+ Add Row</Button>
</div>
`

export const liveTextExample = `// import { Button } from '@pluralsight/react' <- for example purposes only
// import { hstack } from '@/styled-system/patterns' <- for example purposes only

<div class={hstack({ gap: '4' })}>
  <Button usage="text">Cancel</Button>
  <Button>Submit</Button>
</div>
`

export const liveTextWrongExample = `// import { Button } from '@pluralsight/react' <- for example purposes only
// import { hstack } from '@/styled-system/patterns' <- for example purposes only

<div class={hstack({ gap: '4' })}>
  <Button usage="text">Cancel</Button>
  <Button usage="text">Submit</Button>
</div>
`

export const liveLgExample = `// import { Button } from '@pluralsight/react' <- for example purposes only

<Button size="lg">Submit</Button>`

export const liveMdExample = `// import { Button } from '@pluralsight/react' <- for example purposes only

<Button size="md">Submit</Button>`

export const liveSizeWrongExample = `// import { Button } from '@pluralsight/react' <- for example purposes only
// import { hstack } from '@/styled-system/patterns' <- for example purposes only

<div class={hstack({ gap: '4' })}>
  <Button size="md" usage="outline">
    Cancel
  </Button>
  <Button>Submit</Button>
</div>
`

export const liveSingleActionWrongExample = `// import { Button } from '@pluralsight/react' <- for example purposes only
// import { DeleteIcon } from '@pluralsight/react/icons' <- for example purposes only
// import { hstack } from '@/styled-system/patterns' <- for example purposes only

<div class={hstack({ gap: '4' })}>
  <Button usage='outline'>Cancel</Button>
  <Button>Add Row</Button>
  <Button>Submit</Button>
</div>
`

export const liveActionCautionExample = `// import { Button } from '@pluralsight/react' <- for example purposes only
// import { ArrowRightIcon } from '@pluralsight/react/icons' <- for example purposes only

<Button>Next step <ArrowRightIcon /></Button>
`
