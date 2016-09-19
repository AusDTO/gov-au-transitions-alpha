import React from 'react'
import { Link } from 'react-router'

const Breadcrumbs = ({ crumbs = [] }) => (
  <ul>
    <li><a href="http://gov.au">Home</a></li>
    {crumbs.map((crumb, index) => (
      <li key={index}>
        {crumb.href ? (
          <Link to={crumb.href}>
            {crumb.label}
          </Link>
        ) : (
          <span>{crumb.label}</span>
        )}
      </li>
    ))}
  </ul>
)

export default Breadcrumbs
