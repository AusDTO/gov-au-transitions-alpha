import React from "react"
import { Link } from 'react-router'

const ResultsCategoryTiles = ({resultSets}) => {
  return (
    <nav className="results-tiles">
      <ul>
        {resultSets.map(set => {
        return (
          <li key={set.id}>
            {/* this should be changed to the link object */}
            <h3><Link to={"/results/" + set.id}>{set.title}</Link></h3>
            <p>
              <span className="number">{set.list[0].badge}</span>
              <span>{set.list[0].title}</span>
            </p>
            <p>{set.categorysnippet}</p>
          </li>
        )
        })}
      </ul>
    </nav>
  )
}

export default ResultsCategoryTiles
