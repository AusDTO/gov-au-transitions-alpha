import React from 'react'
import Accordion from './Accordion'

const getAccordionContent = items => {
  switch (items.type) {
    case "result":
      return (<ul className="result-list">{items.items.map(item => {
        return (
          <li key={item.label.split(" ").join("_")}>
            <span className="number">{item.number}</span>
            <a href={item.link}>{item.label}</a>
          </li>
        )
      })}</ul>)
    case "steps":
      return (<form><ul className="steps-list">{items.items.map(item => {
        let name = item.label.split(" ").join("_")
        return (
          <li key={name}>
            <input name={name}
              id={name}
              type="checkbox"
              value="true"
              checked={false} />
            <label htmlFor={name}>{item.label}</label>
            <p>{item.abstract}</p>
          </li>)
      })}</ul></form>)
      return (<div>Step type set</div>)
      break;
    case "information":
    default:
      return (<ul className="info-list">{items.items.map(item => {
        return (<li key={item.label.split(" ").join("_")}><a
                  href={item.link}>{item.label}</a></li>)
      })}</ul>)
  }
}
const getAccordions = list => {
  return list.map(items =>  (
      <Accordion key={items.title.split(" ").join("_")} summary={items.title}>
        {items.items && items.items.length ?
          getAccordionContent(items) :
          (<div>No Results found</div>)}
      </Accordion>
  ))
}

const ResultSet = ({resultSets}) => {
  return (
    <div>
      {resultSets.map(set => {
      return (
        <div key={set.id}>
          <h3>{set.title}</h3>
          <div className="abstract">{set.abstract}</div>
          {getAccordions(set.list)}
        </div>
      )
      })}
    </div>
  )

}

export default ResultSet
