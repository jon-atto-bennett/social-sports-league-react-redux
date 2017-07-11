import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='row'>
        <i className='fa fa-futbol-o col-md-2' />
        <h1 className='title col-md-8'>Social Soccer League</h1>
        <i className='fa fa-futbol-o col-md-2' />
      </div>
      <nav className='header'>
        <Link to='/'>Home</Link>
        <Link to='/Fixtures'>Fixtures</Link>
        <Link to='/Results'>Results</Link>
        <Link to='/Table'>Table</Link>
      </nav>
    </div>
  )
}

export default Header
