// const __EXPERIMENTAL__ = process.env.RELEASE_CHANNEL === 'experimental' ?? false
const __NEXT__ = process.env.RELEASE_CHANNEL === 'next' ?? false

// -----------------------------------------------------------------------------
// Land or remove (zero effort) - ready for public - should remove flag logic
//
// Flags that can likely be deleted or landed without consequences
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Land or remove (moderate effort) - next release
//
// Flags that can be probably deleted or landed, but might require extra effort
// like migrating internal callers or performance testing.
// -----------------------------------------------------------------------------
export const menu = __NEXT__

// -----------------------------------------------------------------------------
// Ongoing experiments - experimental release
//
// These are features that we're either actively exploring or are reasonably
// likely to include in an upcoming release.
// -----------------------------------------------------------------------------
