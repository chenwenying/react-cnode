import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { MobXProviderContext, enableStaticRendering } from 'mobx-react'
import App from './views/App'

enableStaticRendering(true)

export default (stores, routerContext, url) => (
  <MobXProviderContext.Provider stores={stores}>
    <StaticRouter context={routerContext} location={url}>
      <App />
    </StaticRouter>
  </MobXProviderContext.Provider>
)
