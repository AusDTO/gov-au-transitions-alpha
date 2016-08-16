import React from 'react'
import ResultSetLinker from '../containers/ResultSetLinker'
import ResultsContentsLinker from '../containers/ResultsContentsLinker'

const Results = ({show}) => {
  if (show) {
    return (
      <div>
        <div className="hero-med corporate">
          <div className="wrapper">
            <h1>Your results</h1>
            <p>Based on your answers, here is your guide to services,<br/>information and next steps to getting support.</p>
          </div>
        </div>
        <main role="main">
          <section className="transition-main content-main">
            <ResultsContentsLinker />
            <ResultSetLinker />
          </section>
        </main>
      </div>
    )
  } else {
    return (<div />)
  }
}

export default Results
