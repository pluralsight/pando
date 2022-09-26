/*eslint no-unused-vars: "off"*/

import type { SyntheticEvent } from 'react'

export interface ActionTypes {
  SET_ACTIVE: 'setActive'
}

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
  onTabClick: DefaultClickHandler
}

// options

export interface TabOptions {
  onClick?: TabClickHandler
}

// types

export type DefaultClickHandler = (e: SyntheticEvent<HTMLButtonElement>) => void
export type TabClickHandler = (id: TabId) => void
export type TabId = FormattedTab['id']
export type PanelId = FormattedPanel['id']
export type RawTabData = Array<TabDataItem>
