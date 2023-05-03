import { createReactRouter, createRouteConfig } from '@tanstack/react-router'

// Routes
import homeRoute from './home'
import admonitionRoute from './admonition'
import avatarRoute from './avatar'
import badgeRoute from './badge'
import buttonRoute from './button'
import checkboxRoute from './checkbox'
import circularProgressRoute from './circularProgress'
import confirmDialogRoute from './confirmDialog'
import errorMessageRoute from './errorMessage'
import fieldMessageRoute from './fieldMessage'
import formControlRoute from './formControl'
import formLabelRoute from './formLabel'
import gridRoute from './grid'
import iconRoute from './icon'
import iconButtonRoute from './iconButton'
import inputRoute from './input'
import menuRoute from './menu'
import modalRoute from './modal'
import paginationRoute from './pagination'
import popoverRoute from './popover'
import preloadedImgRoute from './preloadedImg'
import progressRoute from './progress'
import promptRoute from './prompt'
import radioRoute from './radio'
import selectRoute from './select'
import skeletonRoute from './skeleton'
import switchRoute from './switch'
import tableRoute from './table'
import tabsRoute from './tabs'
import tagRoute from './tag'
import textareaRoute from './textarea'
import textLinkRoute from './textLink'
import toastRoute from './toast'
import tooltipRoute from './tooltip'

// Config
const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute(homeRoute),
  createRoute(admonitionRoute),
  createRoute(avatarRoute),
  createRoute(badgeRoute),
  createRoute(buttonRoute),
  createRoute(checkboxRoute),
  createRoute(circularProgressRoute),
  createRoute(confirmDialogRoute),
  createRoute(errorMessageRoute),
  createRoute(fieldMessageRoute),
  createRoute(formControlRoute),
  createRoute(formLabelRoute),
  createRoute(gridRoute),
  createRoute(iconRoute),
  createRoute(iconButtonRoute),
  createRoute(inputRoute),
  createRoute(menuRoute),
  createRoute(modalRoute),
  createRoute(paginationRoute),
  createRoute(popoverRoute),
  createRoute(preloadedImgRoute),
  createRoute(progressRoute),
  createRoute(promptRoute),
  createRoute(radioRoute),
  createRoute(selectRoute),
  createRoute(skeletonRoute),
  createRoute(switchRoute),
  createRoute(tableRoute),
  createRoute(tabsRoute),
  createRoute(tagRoute),
  createRoute(textareaRoute),
  createRoute(textLinkRoute),
  createRoute(toastRoute),
  createRoute(tooltipRoute),
])

export const router = createReactRouter({ routeConfig })
