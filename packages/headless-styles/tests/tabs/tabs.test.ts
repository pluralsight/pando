/* eslint-disable sonarjs/no-duplicate-string */

import {
  getTabWrapperStyles,
  getTabListStyles,
  getTabStyles,
  getTabPanelStyles,
} from '@headless-styles'

describe('TabWrapper', () => {
  it('should return the correct className', () => {
    const styles = getTabWrapperStyles({})
    expect(styles.className).toBe('pando-tabs-wrapper pando_tabWrapper')
  })

  it('should return the correct className when passed a custom className', () => {
    const styles = getTabWrapperStyles({ classNames: ['custom'] })
    expect(styles.className).toBe('pando-tabs-wrapper pando_tabWrapper custom')
  })
})

describe('TabList', () => {
  it('should return the correct className', () => {
    const styles = getTabListStyles({})
    expect(styles.className).toBe('pando-tabs-list pando_tabList')
  })

  it('should return the correct className when passed a custom className', () => {
    const styles = getTabListStyles({ classNames: ['custom'] })
    expect(styles.className).toBe('pando-tabs-list pando_tabList custom')
  })
})

describe('Tab', () => {
  it('should return the correct className', () => {
    const styles = getTabStyles({})
    expect(styles.className).toBe('pando-tabs-tab pando_tab')
  })

  it('should return the correct className when passed a custom className', () => {
    const styles = getTabStyles({ classNames: ['custom'] })
    expect(styles.className).toBe('pando-tabs-tab pando_tab custom')
  })
})

describe('TabPanel', () => {
  it('should return the correct className', () => {
    const styles = getTabPanelStyles({})
    expect(styles.className).toBe('pando-tabs-panel pando_tabPanel')
  })

  it('should return the correct className when passed a custom className', () => {
    const styles = getTabPanelStyles({ classNames: ['custom'] })
    expect(styles.className).toBe('pando-tabs-panel pando_tabPanel custom')
  })
})
