import React from 'react'
import ResultSet from './ResultSet'
import AsideNavLink from '../containers/AsideNavLink'

const ResultsCategory = ({ show, result, resultSteps, onChange }) => {
  if (show) {
    return (
      <div>
        <div className="hero-sml">
          <div className="wrapper">
            <h1>Explore your results</h1>
          </div>
        </div>
        <main role="main">
          <AsideNavLink />
          <section className="transition-main content-main">
            <ResultSet result={result} resultSteps={resultSteps}
                        onChange={onChange} />
          </section>
        </main>
      </div>
    )
  } else {
    return (<div />)
  }
}

export default ResultsCategory
