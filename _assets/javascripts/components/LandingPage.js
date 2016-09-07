import React from 'react'
import { Link } from 'react-router';

const relatedTopics = [
  {
    title: 'Choosing a service provider',
    content: 'How to choose a provider for home help, things to consider and a checklist of questions to ask a them.'
  },
  {
    title: 'Getting assessed for home support',
    content: 'Assessment for home services is done by a service provider who will come to your home. Call My Aged Care to get started.'
  },
  {
    title: 'Organising consents',
    content: 'There are a few ways to appoint someone legally to make decisions on your behalf, in the short and long term.'
  },
  {
    title: 'Personal alarms',
    content: 'They can be used in an emergency to alert a contact such as a neighbour, relative or monitoring service.'
  }
]

const LandingPage = () => {
  return (
    <div>
      <div className="hero-med corporate">
        <article className="wrapper">
          <h1>Help for older people</h1>
          <p>Answer a few questions to see what government help you can get and how to apply for it.</p>
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
              {relatedTopics.map(({ title, content }, i) => (
                <li key={i}>
                  <article>
                    <h3>
                      <a href="/">{title}</a>
                    </h3>
                    <p>{content}</p>
                  </article>
                </li>
              ))}
            </ul>
        </article>
      </main>
    </div>
  )
}

export default LandingPage
