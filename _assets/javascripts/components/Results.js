import React from 'react'
import ResultSetLinker from '../containers/ResultSetLinker'

const Results = ({show}) => {
  if (show) {
    return (
      <section>
        <h1 className="display">Your results</h1>
        <div className="abstract"><p>Based on your answers, here is your guide to services,<br/>information and next steps to getting support.</p></div>
        <ResultSetLinker />
      </section>
    )
  } else {
    return (<div />)
  }
}

export default Results
