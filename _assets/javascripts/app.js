import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import QuestionLinker from './containers/QuestionLinker'
import ResultsCalculator from './containers/ResultsCalculator'
import LandingPage from './components/LandingPage'
//------------------------------------------------------------------------------
// have a look at the imorts below this line.not all may be reqired.
//------------------------------------------------------------------------------
import {
  ReduxRouter,
  //routerStateReducer,
  reduxReactRouter,
  push,
} from 'redux-router';
import { Route } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    reduxReactRouter({
      createHistory: (options) => createHistory(Object.assign({queryKey: false}, options))
    }),
    // TODO condition this to NODE_ENV as well?
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const TransitionRouter = () => {
  return (
    <Provider store={store}>
      <ReduxRouter>
        <Route path="/" component={LandingPage} />
        <Route path="/question" component={QuestionLinker} />
        <Route path="/question/:id" component={QuestionLinker} />
        <Route path="/results" component={ResultsCalculator} />
      </ReduxRouter>
    </Provider>
  )
}

render(<TransitionRouter />, document.getElementById('landing-page'))
