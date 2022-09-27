import type { Dispatch } from 'react'
import type {
  ActionTypes,
  SetActiveAction,
  SetFocusAction,
  SetRefListAction,
  TabId,
  TabsActions,
  TabsData,
} from './types'

// actions

export const actionTypes: ActionTypes = {
  SET_ACTIVE: 'setActive',
  SET_FOCUS: 'setFocus',
  SET_REF_LIST: 'setRefList',
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

export function setFocusDispatch(
  dispatch: Dispatch<SetFocusAction>,
  idx: number
) {
  dispatch({
    type: actionTypes.SET_FOCUS,
    idx,
  })
}

export function setRefList(
  dispatch: Dispatch<SetRefListAction>,
  el: HTMLElement
) {
  dispatch({
    type: actionTypes.SET_REF_LIST,
    el,
  })
}

// reducer

function getTabIdx(isCurrent: boolean) {
  return isCurrent ? 0 : -1
}

export function reducer(state: TabsData, action: TabsActions) {
  switch (action.type) {
    case actionTypes.SET_ACTIVE:
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
              tabIndex: getTabIdx(isCurrentTab),
            },
          },
          panels: {
            ...prev.panels,
            [panelId]: {
              ...prev.panels[panelId],
              'aria-hidden': !isCurrentTab,
              'aria-expanded': isCurrentTab,
              tabIndex: getTabIdx(isCurrentTab),
            },
          },
        }
      }, state)

    case actionTypes.SET_FOCUS:
      return state.tabList.reduce(
        (prev: TabsData, current: TabId, currentIdx: number) => {
          const isCurrentTab = currentIdx === action.idx
          return {
            ...prev,
            tabs: {
              ...prev.tabs,
              [current]: {
                ...prev.tabs[current],
                tabIndex: getTabIdx(isCurrentTab),
              },
            },
          }
        },
        state
      )

    case actionTypes.SET_REF_LIST:
      return {
        ...state,
        refList: [...state.refList, action.el],
      }

    default:
      throw new Error(
        'Unable to update useTabs state due to an internal error.'
      )
  }
}
