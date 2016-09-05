import React from "react"
import { Link } from 'react-router'

const ResultsMenu = ({resultSets, open = false, onClick}) => {
  return (
    <aside className="" id="nav">
      <button aria-controls="local-nav" className="local-nav-toggle" aria-expanded={open} onClick={onClick}>
        Menu
      </button>
      <nav className="local-nav" aria-label="main navigation" aria-expanded={open} open={open}>
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
    </aside>
  )

}

export default ResultsMenu
