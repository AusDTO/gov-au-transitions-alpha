import React from 'react'
import ResultSet from './ResultSet'
import AsideNavLink from '../containers/AsideNavLink'

const ResultsCategory = ({ show, result, resultSteps, onChange }) => {
  if (show) {
    return (
      <div>
        <div className="hero-sml">
          <div className="wrapper">
            <p>Explore your results</p>
          </div>
        </div>
        <main role="main">
          <AsideNavLink />
          <article className="transition-main content-main">
            <ResultSet result={result} resultSteps={resultSteps}
                        onChange={onChange} />
          </article>
        </main>
      </div>
    )
  } else {
    return (<div />)
  }
}

export default ResultsCategory
