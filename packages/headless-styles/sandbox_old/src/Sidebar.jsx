import { router } from './routes/routeConfig'
import { getTextLinkProps } from '../../src'

const linkStyles = getTextLinkProps().link

export default function Sidebar() {
  return (
    <div className="App-navbar">
      {router.routeTree.childRoutes.map((route) => (
        <router.Link {...linkStyles} key={route.routeId} to={route.fullPath}>
          {route.options.label ?? route.routeRouteId}
        </router.Link>
      ))}
    </div>
  )
}
