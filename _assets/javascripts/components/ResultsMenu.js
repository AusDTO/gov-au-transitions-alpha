import React from "react"
import { Link } from 'react-router'

const ResultsMenu = ({resultSets}) => {
  return (
    <nav className="local-nav" aria-label="main navigation">
    <h1 className="is-visuallyhidden">Menu</h1>
    <ul>
      <li>
        <Link to={'/results'} activeClassName="is-active">
          Explore your results
        </Link>
        <ul>
          {resultSets.map(result => {
            return (
              <li key={result.id}>
                <Link to={'/results/' + result.id} activeClassName="is-active">
                  {result.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </li>
    </ul>
  </nav>
  )

}

export default ResultsMenu
