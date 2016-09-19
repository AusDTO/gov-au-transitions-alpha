import React from 'react'
import BreadcrumbConnector from '../containers/BreadcrumbConnector'

const Layout = ({children}) => (
  <div>
    <header role="banner">
      <section className="prerelease-govau--header">
        <div className="wrapper">
          <div className="govau--logo">
            <img src="/assets/images/logo-govau-full-2x_alpha.png" alt="gov.au crest logo" width="270" />

            <div id="test" className="brandbar default">
              <div className="b1"></div>
              <div className="b2"></div>
            </div>
          </div>

          <div className="feedback" tabIndex="1">
            <a href="" className="button--feedback">Give feedback</a>
          </div>

        </div>

        <nav className="breadcrumbs--inverted" aria-label="breadcrumb">
          <div className="wrapper">
            <BreadcrumbConnector />
            {/*
              <ul>
                  <li><a href="http://gov.au">Home</a></li>
                  <li><a href="/">Help for older people</a></li>
                  <li className="current">Question 1</li>
              </ul>
            */}
          </div>
        </nav>

      </section>
    </header>
    <div>
      {children}
    </div>
  </div>
)

export default Layout
