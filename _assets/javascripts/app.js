import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import QuestionLinker from './containers/QuestionLinker'
import ResultsLandingConnect from './containers/ResultsLandingConnect'
import LandingPage from './components/LandingPage'
import ResultsCategoryConnect from './containers/ResultsCategoryConnect'
//------------------------------------------------------------------------------
// have a look at the imorts below this line.not all may be reqired.
//------------------------------------------------------------------------------
import { ReduxRouter, reduxReactRouter, push } from 'redux-router'
import { Route } from 'react-router'
import createHistory from 'history/lib/createHashHistory'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

import 'stylesheets/application.scss'

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
        <Route path="/results" component={ResultsLandingConnect} />
        <Route path="/results/:id" component={ResultsCategoryConnect} />
      </ReduxRouter>
    </Provider>
  )
}

render(<TransitionRouter />, document.getElementById('landing-page'))

store.subscribe(() => {
  let state = store.getState()

  window.localStorage.setItem('language', state.language);
  window.localStorage.setItem('currentAnswers', JSON.stringify(state.previousAnswers));
})
