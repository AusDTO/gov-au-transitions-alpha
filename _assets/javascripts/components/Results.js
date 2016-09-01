import React from 'react'
import ResultSetLinker from '../containers/ResultSetLinker'
import ResultsContentsLinker from '../containers/ResultsContentsLinker'
import AsideNavLink from '../containers/AsideNavLink'

const Results = ({show}) => {
  if (show) {
    return (
      <div>
        <div className="hero-med">
          <div className="wrapper">
            <h1>Explore your results</h1>
          </div>
        </div>





        <main role="main">
          <AsideNavLink />
          <section className="transition-main content-main">
            <ResultsContentsLinker />
            <ResultSetLinker />
            <button>Print all results  <i className="fa fa-chevron-right" aria-hidden="true"></i></button>
            <h2 className="secondary-title">Also explore</h2>
            <ul className="secondary-links">
              <li><a href="">Managing your medicines</a></li>
              <li><a href="">Financial planning, seminars and advice</a></li>
              <li><a href="">Organising consents such as powers of attorney</a></li>
            </ul>
            <form className="form-wrapper" action="" method="post">
              <h3>Email a friend</h3>
              <p>Complete the below if you would like to send a link to this guided results page. We will not store any personal information.</p>

              <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" name="name" />
              </p>

              <p>
                <label htmlFor="recipient">Their name</label>
                <input type="text" id="recipient" name="recipient" />
              </p>

              <p>
                <label htmlFor="email">Their email</label>
                <input type="email" id="email" name="email"/>
              </p>

              <p>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" placeholder="Message" />
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
