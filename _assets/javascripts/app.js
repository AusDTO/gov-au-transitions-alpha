import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, combineReducers } from 'redux';
import transitionApp from './reducers'
import QuestionLinker from './containers/QuestionLinker'
import ResultsCalculator from './containers/ResultsCalculator'
import LandingPage from './components/LandingPage'
//------------------------------------------------------------------------------
// have a look at the imorts below this line.not all may be reqired.
//------------------------------------------------------------------------------
import {
  ReduxRouter,
  routerStateReducer,
  reduxReactRouter,
  push,
} from 'redux-router';
import { Route } from 'react-router';
import { createHistory } from 'history';

//let store = createStore(transitionApp)
// debugger
const reducer = combineReducers({
  router: routerStateReducer,
  transitionApp
});

const store = compose(
  reduxReactRouter({ createHistory })
)(createStore)(reducer);

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

// render(
//   <Provider store={store}>
//     <QuestionLinker />
//   </Provider>,
//   document.getElementById('questions')
// )
//
// render(
//   <Provider store={store}>
//     <ResultsCalculator />
//   </Provider>,
//   document.getElementById('results-holder')
// )

// render(
//   <Provider store={store}>
//     <LandingPage />
//   </Provider>,
//   document.getElementById('landing-page')
// )
