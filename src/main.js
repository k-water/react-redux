import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'
import { Provider, connect } from 'react-redux'
import * as CounterActions from '$redux/actions'
import configureStore from '$redux/store/configureStore'

const store = configureStore()

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => render(App))
}
