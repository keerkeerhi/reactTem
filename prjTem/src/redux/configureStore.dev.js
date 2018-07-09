import { createStore, applyMiddleware, compose,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import api from './api'
import rootReducer from './reducers'
import DevTools from '../routes/DevTools'

import { routerReducer as router,routerMiddleware } from 'react-router-redux'

const configureStore = (history) => {
  console.log('------->',history)
  const store = createStore(
    // reducer
    combineReducers({
        rootReducer,
        router
    }),
    undefined,
    // middleware
    compose(
      applyMiddleware(thunk, api, routerMiddleware(history),createLogger()),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore
