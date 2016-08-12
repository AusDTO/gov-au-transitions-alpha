import React, { Component, PropTypes } from 'react'

class Accordion extends Component {
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
    return (
      <details aria-expanded={this.state.open}>
        <summary onClick={this.handleClick}>{this.props.summary}</summary>
        <div className="accordion-panel">
            {this.props.children}
        </div>
      </details>
    )
  }
}

Accordion.propTypes = {
  summary: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Accordion
