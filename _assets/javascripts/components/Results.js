import React from 'react'
import ResultSetLinker from '../containers/ResultSetLinker'
import ResultsContentsLinker from '../containers/ResultsContentsLinker'

const Results = ({show}) => {
  if (show) {
    return (
      <div>
        <div className="hero-med corporate">
          <div className="wrapper">
            <h1>Your results</h1>
            <p>Based on your answers, here is your guide to services,<br/>information and next steps to getting support.</p>
          </div>
        </div>
        <main role="main">
          <section className="transition-main content-main">
            <ResultsContentsLinker />
            <ResultSetLinker />
            <button>Print all results  <i className="fa fa-chevron-right" aria-hidden="true"></i></button>
            <h2>Also explore</h2>
            <ul>
              <li><a href="">Consider concent needs</a></li>
              <li><a href="">Support for carers</a></li>
            </ul>
            <hr />
            <form className="list-horizontal" action="" method="post">
              <h2>Email a friend</h2>
              <p>Complete the below if you would like to send a link to this guided results page. We will not store any personal information.</p>

              <p>
                <label for="name">Your name</label>
                <input type="text" id="name" name="name" />
              </p>

              <p>
                <label for="recipient">Their name</label>
                <input type="text" id="recipient" name="recipient" />
              </p>

              <p>
                <label for="email">Their email</label>
                <input type="email" id="email" name="email"/>
              </p>

              <p>
                <label for="message">Message</label>
                <textarea name="message" id="message" placeholder="Message"> </textarea>
              </p>

              <button type="submit">Send  <i className="fa fa-chevron-right" aria-hidden="true"></i></button>
            </form>
          </section>
        </main>
      </div>
    )
  } else {
    return (<div />)
  }
}

export default Results
