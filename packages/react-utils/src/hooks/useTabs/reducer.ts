import type { Dispatch } from 'react'
import type { ActionTypes, TabId, TabsData } from './types'

export const actionTypes: ActionTypes = {
  SET_ACTIVE: 'setActive',
}

export function setActiveDispatch(
  dispatch: Dispatch<SetActiveAction>,
  id: TabId
) {
  dispatch({
    type: actionTypes.SET_ACTIVE,
    id,
  })
}

// reducer

interface SetActiveAction {
  id: TabId
  type: ActionTypes['SET_ACTIVE']
}

export function reducer(state: TabsData, action: SetActiveAction) {
  if (action.type === actionTypes.SET_ACTIVE) {
    return state.tabList.reduce((prev: TabsData, current: TabId) => {
      const isCurrentTab = current === action.id
      const panelId = `${current}:panel`

      return {
        ...prev,
        tabs: {
          ...prev.tabs,
          [current]: {
            ...prev.tabs[current],
            'aria-selected': isCurrentTab,
            tabIndex: isCurrentTab ? '0' : '-1',
          },
        },
        panels: {
          ...prev.panels,
          [panelId]: {
            ...prev.panels[panelId],
            'aria-hidden': isCurrentTab,
            'aria-expanded': isCurrentTab,
            tabIndex: isCurrentTab ? '0' : '-1',
          },
        },
      }
    }, state)
  }

  throw new Error('Unable to update useTabs state due to an internal error.')
}
