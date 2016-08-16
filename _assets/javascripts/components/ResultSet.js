import React from 'react'
import Accordion from './Accordion'

const getStepActions = actions => {
  return actions.map(action => {
    return (
      <li key={action.label.split(" ").join("_")}
          className={action.type === "secondary" ? "secondary" : "link"}>
        {action.prefix ? action.prefix : ""} <a
          role={action.type === "button" ? "button" : ""}
          rel={action.type === "external" ? "external" : ""}
          href={action.link}>
            {action.label}
          </a>
      </li>
    )
  })
}

const getAccordionContent = items => {
  switch (items.type) {
    case "result":
      return (<ul>{items.items.map(item => {
        return (
          <li key={item.label.split(" ").join("_")}>
            <span className="number">{item.number}</span>
            <a rel="external" href={item.link}>{item.label}</a>
          </li>
        )
      })}</ul>)
    case "steps":
      return (<form><ul className="module-list">{items.items.map(item => {
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
            <ul className="step-actions">{getStepActions(item.actions)}</ul>
          </li>)
      })}</ul></form>)
      return (<div>Step type set</div>)
      break;
    case "information":
    default:
      return (<ul>{items.items.map(item => {
        return (
          <li key={item.label.split(" ").join("_")}>
            <a rel="external" href={item.link}>{item.label}</a>
          </li>
          )
      })}</ul>)
  }
}
const getAccordions = list => {
  return list.map(items =>  (
      <Accordion key={items.title.split(" ").join("_")}
        className={items.type + "-list"}
        summary={items.title}>
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
        <div key={set.id} id={set.id}>
          <h3>{set.title}</h3>
          <p>{set.abstract}</p>
          {getAccordions(set.list)}
        </div>
      )
      })}
    </div>
  )

}

export default ResultSet
