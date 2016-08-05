import React, { Component, PropTypes } from 'react'

class Glossary extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      open: false
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({open: !this.state.open})
  }

  render() {
    if (this.props.list.length === 0) {
      return <div></div>
    }
    let dlList = this.props.list.map(dlItem => (
      <dl key={dlItem.term}>
        <dt>{dlItem.term}</dt>
        <dd>{dlItem.description}</dd>
      </dl>
    ))
    return (
      <div>
        <a href="#" onClick={this.handleClick}>View definitions <i className="fa fa-caret-down" aria-hidden="true"></i></a>
        <div className="glossary-content" aria-expanded={this.state.open}>
          {dlList}
        </div>
      </div>
    )
  }
}

Glossary.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    term: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }))
}

export default Glossary
