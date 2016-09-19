import React from 'react'
import { Link } from 'react-router'

const Breadcrumbs = ({ crumbs = [] }) => (
  <ul>
    {/* this should ideally goto gov.au homepage */}
    <li><Link to="/">Home</Link></li>
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
