import React from 'react'
import {Link} from 'react-router-dom'

function NoMatch() {
  return (
    <div className="no-match text-center">
      <h2 className="no-match-title">Page Not Found</h2>
      <Link to='/'>Go To Homepage</Link>
    </div>
  )
}

export default NoMatch
