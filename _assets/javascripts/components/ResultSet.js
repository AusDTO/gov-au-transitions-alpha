import React from 'react'
import Accordion from './Accordion'

// @TODO this should be moved to the parent container element
const getBadgeContent = (items, checked) => {
  if (items.type === "steps") {
    let len = items.items.length
    let minus = 0
    for (let i = 0; i < len; i += 1) {
      if (checked.indexOf(items.items[i].label.split(" ").join("_")) > -1) {
        minus += 1
      }
    }
    return len - minus
  } else {
    return ""
  }
}

const getStepActions = actions => {
  return actions.map(action => {
    return (
      <li key={action.label.split(" ").join("_")}
          className={action.type === "secondary" ? "secondary" : "link"}>
        {action.prefix ? action.prefix : ""} <a
          role={action.type === "button" ? "button" : ""}
          rel={action.type === "external" ? "external" : ""}
          href={action.link} target="_blank">
            {action.label}
          </a>
      </li>
    )
  })
}

const getAccordionContent = (items, checked, onChange) => {
  switch (items.type) {
    case "result":
      return (<ul>{items.items.map(item => {
        return (
          <li key={item.label.split(" ").join("_")}>
            <span className="number">{item.number}</span>
            <a rel="external" href={item.link} target="_blank">{item.label}</a>
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
              checked={checked.indexOf(name) > -1 ? true : false}
              onChange={onChange.bind(null, name)} />
            <label htmlFor={name}>{item.label}</label>
            <p>{item.abstract}</p>
            <ul className="step-actions">{getStepActions(item.actions)}</ul>
            {item.type === "funded" ? (<div className="step-actions"><span className="info-badge">Goverment funded</span></div>) : ""}
          </li>)
      })}</ul></form>)
      return (<div>Step type set</div>)
      break;
    case "information":
    default:
      return (<ul>{items.items.map(item => {
        return (
          <li key={item.label.split(" ").join("_")}>
            <a rel="external" href={item.link} target="_blank">{item.label}</a>
          </li>
          )
      })}</ul>)
  }
}
const getAccordions = (list, checked, onChange) => {
  return list.map(items =>  (
      <Accordion key={items.title.split(" ").join("_")}
        className={items.type + "-list"}
        summary={items.title}
        badge={getBadgeContent(items, checked)}>
        {items.items && items.items.length ?
          getAccordionContent(items, checked, onChange) :
          (<div>No Results found</div>)}
      </Accordion>
  ))
}

const ResultSet = ({resultSets, resultSteps, onChange}) => {
  return (
    <div>
      {resultSets.map(set => {
      return (
        <div key={set.id} id={set.id}>
          <h3>{set.title}</h3>
          <p>{set.abstract}</p>
          {getAccordions(set.list, resultSteps, onChange)}
        </div>
      )
      })}
    </div>
  )

}

export default ResultSet
