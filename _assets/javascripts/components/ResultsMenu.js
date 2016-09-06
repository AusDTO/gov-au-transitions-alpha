import React, { Component } from 'react'
import { Link } from 'react-router'

class ResultsMenu extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      open: false
    }
  }

  toggle(e) {
    e.preventDefault()
    this.setState({ open: !this.state.open })
  }

  render() {
    const { resultSets } = this.props
    const { open } = this.state

    return (
      <aside className="" id="nav">
        <button aria-controls="local-nav" className="local-nav-toggle" aria-expanded={open} onClick={this.toggle}>
          Menu
        </button>
        <nav className="local-nav" aria-label="main navigation" aria-expanded={open} open={open}>
          <ul>
            <li>
              <Link to={'/results'} activeClassName="is-active">
                Explore your results
              </Link>
              <ul>
                {resultSets.map(result => {
                  return (
                    <li key={result.id}>
                      <Link to={'/results/' + result.id} activeClassName="is-active">
                        {result.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default ResultsMenu
