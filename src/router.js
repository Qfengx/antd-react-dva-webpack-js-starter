
import React from 'react'

import { Redirect, Route, Switch, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import App from './app'

const { ConnectedRouter } = routerRedux

const Routers = ({ history, app }) => {
  const error = dynamic({
    app,
    component: () => import('./pages/error')
  })
  const routes = [
    {
      path: '/home',
      models: () => [import('./models/home')],
      component: () => import('./pages/home')
    },
    {
      path: '/login',
      models: () => [import('./models/login')],
      component: () => import('./pages/login')
    }
  ]

  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/login" />)} />
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
          <Route component={error} />
        </Switch>
      </App>
    </ConnectedRouter>
  )
}

export default Routers