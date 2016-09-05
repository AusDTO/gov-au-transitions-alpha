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
            <span>
            <a rel="external" href={item.link} target="_blank">{item.label}</a>
            </span>
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

const getLocalResults = items => (
  <div key={items.title.split(" ").join("_")}>
    <h3>{items.title}</h3>
    <div className={"accordion-panel " + items.type + "-list"}>
      <ul>
        {items.items.map(item => {
          return (
            <li key={item.label.split(" ").join("_")}>
              <span className="number">{item.number}</span>
              <span>
              <a rel="external" href={item.link} target="_blank">{item.label}</a>
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)


const getInformationResults = items => (
  <div key={items.title.split(" ").join("_")}>
    <h3>{items.title}</h3>
    <div className={items.type + "-list"}>
      <ul>
        {items.items.map(item => (
          <li key={item.label.split(" ").join("_")}>
            <a rel="external" href={item.link} target="_blank">{item.label}</a>
          </li>
        )
        )}
      </ul>
    </div>
  </div>
)

const getStepResults = (items, checked, onChange) => (
  <div key={items.title.replace(' ', '_')}>
    <h3><span className='number'>{items.badge}</span>{items.title}</h3>
    <div className={items.type + "-list"}>
    {items.items.map(item => {
      let name = item.label.replace(' ', '_')
      return (
        <Accordion key={name}
          summary={item.label}>
          <p>{item.abstract}</p>
          <ul className="step-actions">{getStepActions(item.actions)}</ul>
          {item.type === "funded" ? (<div className="step-actions"><span className="info-badge">Goverment funded</span></div>) : ""}
        </Accordion>
    )})}
    </div>
  </div>
)

/*<li key={name}>
  <input name={name}
    id={name}
    type="checkbox"
    value="true"
    checked={checked.indexOf(name) > -1 ? true : false}
    onChange={onChange.bind(null, name)} />
  <label htmlFor={name}>{item.label}</label>
</li>*/

const getSubContent = (list, checked, onChange) => {
  return list.map(items =>  {
    switch (items.type) {
      case "steps":
        return getStepResults(items, checked, onChange)
      case "result":
        return getLocalResults(items)
      case "information":
      default:
        return getInformationResults(items)
    }
    return (
      <Accordion key={items.title.split(" ").join("_")}
        className={items.type + "-list"}
        summary={items.title}
        badge={items.type === "steps" ? items.badge : null}>
        {items.items && items.items.length ?
          getAccordionContent(items, checked, onChange) :
          (<div>No Results found</div>)}
      </Accordion>
  )})
}

const ResultSet = ({result, resultSteps, onChange}) => {
  return (
    <div key={result.id} id={result.id} className="results-set">
      <h1>{result.title}</h1>
      <p className='abstract'>{result.abstract}</p>
      {getSubContent(result.list, resultSteps, onChange)}
    </div>
  )
}

export default ResultSet
