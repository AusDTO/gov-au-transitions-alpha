import React from 'react'
import ResultSet from './ResultSet'
import AsideNavLink from '../containers/AsideNavLink'
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
            <ResultSet result={result} resultSteps={resultSteps}
                        onChange={onChange} />
          </article>
        </article>
        <article>
            <AsideNavLink className="show-for-mobile" />
        </article>
      </main>
    </div>
  )

}

export default ResultsCategory
