import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        {' | '}
        <Link to='/Fixtures'>Fixtures</Link>
        {' | '}
        <Link to='/Results'>Results</Link>
        {' | '}
        <Link to='/Table'>Table</Link>
      </nav>
      <h1>Social Soccer League</h1>
    </div>
  )
}

export default Header
