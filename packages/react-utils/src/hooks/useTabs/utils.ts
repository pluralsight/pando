import type { RawTabData, TabDataItem, TabId, TabsData } from './types'

const defaultData = {
  panelList: [],
  panels: {},
  tabList: [],
  tabs: {},
  onTabClick: () => null,
}

// public

export function clearLocalStorage(uuid: string) {
  localStorage.removeItem(`ps:${uuid}`)
}

export function setLocalStorage(uuid: string, tabId: TabId) {
  localStorage.setItem(`ps:${uuid}`, tabId)
}

export function getLocalStorage(uuid: string) {
  localStorage.getItem(`ps:${uuid}`)
}

export function normalizeData(rawData: RawTabData) {
  return rawData.reduce((prev: TabsData, current: TabDataItem) => {
    const { id } = current
    const panelId = `${id}:panel`

    return {
      ...prev,
      tabList: [...prev.tabList, id],
      tabs: {
        ...prev.tabs,
        [id]: {
          'aria-selected': false,
          'aria-controls': '',
          id,
          role: 'tab',
          tabIndex: '-1',
        },
      },
      panelList: [...prev.panelList, panelId],
      panels: {
        ...prev.panels,
        [panelId]: {
          'aria-expanded': false,
          'aria-hidden': false,
          'aria-labelledby': id,
          id: panelId,
          role: 'tabpanel',
          tabIndex: '0',
        },
      },
    }
  }, defaultData)
}
