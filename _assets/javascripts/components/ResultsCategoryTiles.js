import React, { PropTypes } from "react"
import { Link } from 'react-router'

const ResultsCategoryTiles = ({resultSets, type}) => {
  return (
    <nav className={"results-tiles results-tiles--" + type}>
      <ul>
        {resultSets.map(set => {
        return (
          <li key={set.id}>
            <h3><Link to={"/results/" + set.id}>{set.title}</Link></h3>
            <p>
              <span className="number">{set.list[0].badge}</span>
              <span>{set.list[0].title}</span>
            </p>
            {type === 'expand' ? (<p>{set.categorysnippet}</p>) : "" }
          </li>
        )
        })}
      </ul>
    </nav>
  )
}

ResultsCategoryTiles.defaultProps = {
  type: 'expand'
}

ResultsCategoryTiles.propTypes = {
  type: PropTypes.string,
  resultSets: PropTypes.array.isRequired
}

export default ResultsCategoryTiles
