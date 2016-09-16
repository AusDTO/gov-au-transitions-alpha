import React from 'react'
import ResultSetLinker from '../containers/ResultSetLinker'
import AsideNavLink from '../containers/AsideNavLink'
import ResultsTilesConnect from '../containers/ResultsTilesConnect'
import ResultsMenu from './ResultsMenu'

const ResultsCategory = ({ show, result, resultSteps, showResults, resultSets, onChange }) => {
  if (!show) {
    return (<div />)
  }

  return (
    <div>
      <div className="hero-sml">
        <div className="wrapper">
          <p>Explore your results</p>
        </div>
      </div>
      <main role="main">
        <article>
          <aside className="sidebar">
            {showResults ? <ResultsMenu resultSets={resultSets}/> : ''}
            <AsideNavLink className="hide-for-mobile" />
          </aside>
          <article className="transition-main content-main">
            <ResultSetLinker
              result={result}
              resultSteps={resultSteps}
              onChange={onChange}
              />
          </article>
        </article>
        <article>
            <AsideNavLink className="show-for-mobile" />
        </article>
        <article>
          <h3>Explore your results</h3>
          <ResultsTilesConnect type="simple" />
        </article>
      </main>
    </div>
  )

}

export default ResultsCategory
