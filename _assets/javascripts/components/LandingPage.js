import React from 'react'
import { Link } from 'react-router';

const LandingPage = () => {
  return (
    <div>
      <main role="main" className="hero-gradient">
        <article className="wrapper">
          <div className="landing-wrapper">
            <h2>Helping older Australians</h2>
            <h1>Explore support services that might be right for you</h1>
            <Link to="/question">Get started<i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
          </div>
        </article>
      </main>
      <aside className="asside-content">
        <section className="wrapper">
          <h2>Related topics</h2>
          <div className="topics-wrapper">
            <article className="related-topics">
              <a href="/">Choosing a service provider</a>
              <p>How to choose a provider for home help, things to consider and a checklist of questions to ask a them.</p>
            </article>

            <article className="related-topics">
              <a href="/">Getting assessed for home support</a>
              <p>Assessment for home services is done by a service provider who will come to your home. Call My Aged Care to get started.</p>
            </article>

            <article className="related-topics">
              <a href="/">Organising consents</a>
              <p>There are a few ways to appoint someone legally to make decisions on your behalf, in the short and long term.</p>
            </article>

            <article className="related-topics">
              <a href="/">Personal alarms</a>
              <p>They can be used in an emergency to alert a contact such as a neighbour, relative or monitoring service.</p>
            </article>
          </div>
        </section>
      </aside>
    </div>
  )
}

export default LandingPage
