import React from 'react'
import { Link } from 'react-router';

const LandingPage = () => {
  return (
    <div>
      <div className="hero-med corporate">
        <article className="wrapper">
          <h1>Help for older people</h1>
          <p>Answer a few questions about your situation to see what government help you can get, and how to go about it.</p>
          <Link to="/question" role="button">Next <i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
        </article>
      </div>
      <article className="emergency-callout">
        <div className="wrapper">
          <p>If you need urgent medical help call <a href="tel:000000">000</a>.</p>
        </div>
      </article>
      <main role="main">
        <article>
          <h2>Related topics</h2>
            <ul className="list-vertical--fourths real-list">
              <li>
                <article>
                  <h3>
                    <a href="/">Choosing a service provider</a>
                  </h3>
                  <p>
                    How to choose a provider for home help, things to consider and a checklist of questions to ask a them.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h3>
                    <a href="/">Getting assessed for home support</a>
                  </h3>
                  <p>
                    Assessment for home services is done by a service provider who will come to your home. Call My Aged Care to get started.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h3>
                    <a href="/">Organising consents</a>
                  </h3>
                  <p>
                    There are a few ways to appoint someone legally to make decisions on your behalf, in the short and long term.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h3>
                    <a href="/">Personal alarms</a>
                  </h3>
                  <p>
                    They can be used in an emergency to alert a contact such as a neighbour, relative or monitoring service.
                  </p>
                </article>
              </li>
            </ul>
        </article>
      </main>
    </div>
  )
}

export default LandingPage
