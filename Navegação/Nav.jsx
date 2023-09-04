import {Link} from 'react-router-dom'

import React from 'react'

const Nav = () => {
  return (
    <div>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
    </ul>
    <ul>
        <li>
            <Link to="/Ansiedade">Oque é Ansiedade?</Link>
        </li>
    </ul>
    </div>
  )
}

export default Nav