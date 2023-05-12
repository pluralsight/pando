import { Skeleton } from '@pluralsight/react/dev'

function TextSkeleton() {
  return <Skeleton kind="text" />
}

const skeletonPageContent = (
  <div id="skeleton">
    <h3>Skeleton</h3>

    <div>
      <Skeleton kind="content">
        <div>contents wrapped</div>
        <div>won&#x27;t be visible</div>
      </Skeleton>

      <br />
      <div style={{ width: '48%' }}>
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
      </div>
    </div>

    <br />
    <div style={{ display: 'flex' }}>
      <Skeleton kind="circle" />

      <div style={{ marginInlineStart: '1rem', width: '80%' }}>
        <TextSkeleton />

        <Skeleton kind="content">
          <h3>A Headline</h3>
          <p>Some follow up text</p>
          <button>ignore</button>
          <input type="text" placeholder="Type something..." />
        </Skeleton>
      </div>
    </div>
  </div>
)

export default function SkeletonPage() {
  return skeletonPageContent
}
