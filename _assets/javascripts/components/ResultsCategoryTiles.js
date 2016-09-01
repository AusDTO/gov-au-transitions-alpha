import React from "react"

const ResultsCategoryTiles = ({resultSets}) => {
  return (
    <nav className="results-tiles">
      <ul>
        {resultSets.map(set => {
        return (
          <li key={set.id}>
            {/* this should be changed to the link object */}
            <a href={"#" + set.id}>
              <h4>{set.title}</h4>
              <p>
                <span className="number">{set.list[0].badge}</span>
                <span>{set.list[0].title}</span>
              </p>
              <p>{set.categorysnippet}</p>
            </a>
          </li>
        )
        })}
      </ul>
    </nav>
  )

}

export default ResultsCategoryTiles
