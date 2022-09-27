/*eslint no-unused-vars: "off"*/

import type { Dispatch, SyntheticEvent } from 'react'

// params

export interface RawPanel {
  id: string
}

export interface RawTab {
  id: string
  label: string
}

export interface TabDataItem extends RawTab {
  children: RawPanel
}

// formatted types

export interface FormattedTab {
  'aria-selected': boolean
  'aria-controls': string
  id: string
  label: string
  role: string
  tabIndex: number
}

export interface FormattedPanel {
  'aria-hidden': boolean
  'aria-expanded': boolean
  'aria-labelledby': string
  id: string
  role: string
  tabIndex: number
}

// returned types

export interface TabsData {
  panelList: Array<TabId>
  panels: Record<TabId, FormattedPanel>
  tabList: Array<TabId>
  tabs: Record<TabId, FormattedTab>
  refList: Array<HTMLElement>
  dispatch: Dispatch<TabsActions>
}

// options

export interface TabOptions {
  onClick?: TabClickHandler
}

// actions

export interface ActionTypes {
  SET_ACTIVE: 'setActive'
  SET_FOCUS: 'setFocus'
  SET_REF_LIST: 'setRefList'
}

export interface SetActiveAction {
  id: TabId
  type: ActionTypes['SET_ACTIVE']
}

export interface SetFocusAction {
  idx: number
  type: ActionTypes['SET_FOCUS']
}

export interface SetRefListAction {
  el: HTMLElement
  type: ActionTypes['SET_REF_LIST']
}

// types

export type DefaultClickHandler = (e: SyntheticEvent<HTMLButtonElement>) => void
export type PanelId = FormattedPanel['id']
export type RawTabData = Array<TabDataItem>
export type TabClickHandler = (id: TabId) => void
export type TabId = FormattedTab['id']
export type TabsActions = SetActiveAction | SetFocusAction | SetRefListAction
