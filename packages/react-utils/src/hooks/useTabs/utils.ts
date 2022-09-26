import type { RawTabData, TabDataItem, TabsData } from './types'

const defaultData = {
  panelList: [],
  panels: {},
  tabList: [],
  tabs: {},
  onTabClick: () => null,
}

// public

export function normalizeData(rawData: RawTabData) {
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
  }, defaultData)
}
