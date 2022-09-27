import type { RawTabData, TabDataItem, TabsData } from './types'

// public

export function normalizeData() {
  return {
    panelList: [],
    panels: {},
    tabList: [],
    tabs: {},
    refList: [],
    dispatch: () => null,
  } as TabsData
}

export function setupData(rawData: RawTabData) {
  return rawData.reduce((prev: TabsData, current: TabDataItem, eq: number) => {
    const { id } = current
    const firstRawItem = eq === 0
    const panelId = `${id}:panel`

    return {
      ...prev,
      tabList: [...prev.tabList, id],
      tabs: {
        ...prev.tabs,
        [id]: {
          'aria-selected': firstRawItem ? true : false,
          'aria-controls': panelId,
          id,
          label: current.label,
          role: 'tab',
          tabIndex: firstRawItem ? 0 : -1,
        },
      },
      panelList: [...prev.panelList, panelId],
      panels: {
        ...prev.panels,
        [panelId]: {
          'aria-expanded': firstRawItem ? true : false,
          'aria-hidden': firstRawItem ? false : true,
          'aria-labelledby': id,
          id: panelId,
          role: 'tabpanel',
          tabIndex: firstRawItem ? 0 : -1,
        },
      },
    }
  }, normalizeData())
}
