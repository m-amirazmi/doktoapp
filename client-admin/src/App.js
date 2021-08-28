import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { routes } from './utils/routes'

export default function App() {

  const renderRoutes = routes.map((route) => <Route key={route.path} exact path={route.path} component={route.component} />)

  return (
    <Router>
      <Switch>
        {renderRoutes}
      </Switch>
    </Router>
  )
}
