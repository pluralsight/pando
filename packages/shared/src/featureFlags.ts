// -----------------------------------------------------------------------------
// Land or remove (zero effort) - ready for public - should remove flag logic
//
// Flags that can likely be deleted or landed without consequences
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Land or remove (moderate effort) - next release
//
// Flags that can be probably deleted or landed, but might require extra effort
// like removing flag logic in public packages, etc.
// -----------------------------------------------------------------------------

export const menu = true
export const modal = true
export const preloadImgHook = true
export const tabs = true
export const tabsHook = true

// -----------------------------------------------------------------------------
// Slated for removal in the future (significant effort)
//
// These are experiments that didn't work out, and never shipped, but we can't
// delete from the codebase until we migrate internal callers.
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Ongoing experiments - experimental release
//
// These are features that we're either actively exploring or are reasonably
// likely to include in an upcoming release.
// -----------------------------------------------------------------------------

export const select = __EXPERIMENTAL__
export const table = __EXPERIMENTAL__

// -----------------------------------------------------------------------------
// Chopping Block
//
// Planned feature deprecations and breaking changes. Sorted roughly in order of
// when we plan to enable them.
// -----------------------------------------------------------------------------
