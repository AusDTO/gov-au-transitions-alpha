import React from 'react'

const Question = () => (
  <aside className="sidebar" id="nav">
    <button aria-controls="local-nav" className="local-nav-toggle">Menu</button>
    <nav className="local-nav" aria-label="main navigation" id="null" aria-expanded="false">
      <ul>
        <li>
          <a href="index.html" className="is-active">Getting started</a>
          this is some stuff
        </li>
      </ul>
    </nav>
  </aside>
)

export default Question
