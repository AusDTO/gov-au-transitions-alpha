import React, { Component, PropTypes } from 'react'

class Accordion extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      open: true
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({open: !this.state.open})
  }

  render() {
    let theClassName = "accordion-panel " + this.props.className
    return (
      <details open={this.state.open} aria-expanded={this.state.open} className="accordion">
        <summary onClick={this.handleClick}>
          <span className="accordion-content">{this.props.summary}</span>
        </summary>
        <div className={theClassName}>
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
