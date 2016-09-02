import React from 'react'
import ResultsTilesConnect from '../containers/ResultsTilesConnect'
import AsideNavLink from '../containers/AsideNavLink'

const Results = ({show}) => {
  if (show) {
    return (
      <div>
        <div className='hero-med'>
          <div className='wrapper'>
            <h1>Explore your results</h1>
          </div>
        </div>
        <main role='main'>
          <AsideNavLink />
          <article className='transition-main content-main'>
            <p className='abstract'>Select next steps and local services from your topics below.</p>
            <ResultsTilesConnect />
            <h2 className="secondary-title">Also explore</h2>
            <ul className="secondary-links">
              <li><a href="">Managing your medicines</a></li>
              <li><a href="">Financial planning, seminars and advice</a></li>
              <li><a href="">Organising consents such as powers of attorney</a></li>
            </ul>
          </article>
        </main>
      </div>
    )
  } else {
    return (<div />)
  }
}

export default Results
