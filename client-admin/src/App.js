import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import { routes } from './utils/routes'
import PrivateRoute from './components/PrivateRoute'

export default function App() {

  const { currentUser } = useAuth()

  console.log(currentUser)

  const renderRoutes = routes.map((route) => {
    if (!route.protected) return <Route key={route.path} exact path={route.path} component={route.component} />
    return <PrivateRoute key={route.path} exact path={route.path} component={route.component} />
  })


  return (
    <Router>
      <Switch>
        {renderRoutes}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  )
}
