import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, combineReducers , applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory , IndexRoute} from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as reducers from './reducers'

import { App , Home , About} from './components'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'


injectTapEventPlugin()
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})
const configureStore = (preloadedState) => {
    const store = createStore(
        reducer,
        preloadedState,
        applyMiddleware(thunk)
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }
 
    return store
}

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <div>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
          </Route>
        </Router>
      </div>
    </MuiThemeProvider>
  </Provider>
  ,
  document.getElementById('root')
)
