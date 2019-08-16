import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../../lib/Auth'

class Navbar extends React.Component {


  constructor() {
    super()

  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">Home</Link>
          </div>
        </div>
      </nav>

    )
  }




}

export default withRouter(Navbar)
