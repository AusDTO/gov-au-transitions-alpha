import React from 'react'
import { Link } from 'react-router';

const relatedTopics = [
  {
    title: 'Getting home support',
    content: 'You can be assessed to receive the support you need in your home. Call My Aged Care to get started.'
  },
  {
    title: 'Considering consent needs',
    content: 'There are a few ways to appoint someone legally to make decisions on your behalf, in the short and long term.'
  },
  {
    title: 'Support for carers',
    content: 'Carers can apply for government support to care for family members and friends who are frail or aged.'
  },
  {
    title: 'Choosing an aged care home',
    content: 'Thinking about what you need and the kinds of questions to ask can help you get started.'
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
