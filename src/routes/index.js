import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import NoMatch from 'components/no-match'
import Home from 'components/home'
import Person from 'components/person'

const PublicRoute = ({ component, ...rest }) => {
  const routeComponent = (props) => React.createElement(component, props)
  return <Route {...rest} render={routeComponent} />
}

const PrivateRoute = (component, isAuthenticated, ...rest) => {
  const routeComponent = (props) =>
    isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/' }} />
    )
  return <Route {...rest} render={routeComponent} />
}

function Routes() {

  return (
    <Router>
      <Switch>
        <PublicRoute exact component={Home} path="/" />
        <PublicRoute component={Person} path="/person" />
        <PublicRoute component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default Routes