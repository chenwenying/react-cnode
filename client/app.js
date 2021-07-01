import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'; //eslint-disable-line
import { MobXProviderContext } from 'mobx-react'

import App from './views/App'

import AppState from './store/app-state';

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
const root = document.getElementById('root')

const render = (Component) => {
  renderMethod(
    <AppContainer>
      <MobXProviderContext.Provider value={new AppState()}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </MobXProviderContext.Provider>
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./app').default //eslint-disable-line
    render(NextApp)
  })
}
