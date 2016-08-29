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
import { createHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    reduxReactRouter({ createHistory }),
    // TODO condition this to NODE_ENV as well?
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const TransitionRouter = () => {
  return (
    <Provider store={store}>
      <ReduxRouter>
        <Route path="/" component={LandingPage}>

          {/* <Route path="parent" component={Parent}>
          //   <Route path="child" component={Child} />
          //   <Route path="child/:id" component={Child} />
          // </Route>*/}
        </Route>
        <Route path="/question" component={QuestionLinker} />
      </ReduxRouter>
    </Provider>
  )
}

render(<TransitionRouter />, document.getElementById('landing-page'))
