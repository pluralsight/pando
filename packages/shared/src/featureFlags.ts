import { createFlag } from './utils/helpers'

const __EXPERIMENTAL__ = createFlag('experimental')
const __NEXT__ = createFlag('next')

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
export const preloadImgHook = __NEXT__
export const tabs = __NEXT__
export const tabsHook = __NEXT__

// -----------------------------------------------------------------------------
// Ongoing experiments - experimental release
//
// These are features that we're either actively exploring or are reasonably
// likely to include in an upcoming release.
// -----------------------------------------------------------------------------

export const modal = __EXPERIMENTAL__
