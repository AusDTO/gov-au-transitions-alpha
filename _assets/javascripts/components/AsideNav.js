import React from 'react'

const Question = () => (
  <aside className="sidebar" id="nav">
    <button aria-controls="local-nav" className="local-nav-toggle">Your Answers</button>
    <nav className="local-nav" aria-label="main navigation" id="null" aria-expanded="false">
      <div className="your-answers">Your Answers</div>
      <button>Send to MyAgedCare</button><br />
      <a href="">Why send my results to my aged care?</a>
    </nav>
  </aside>
)

export default Question
