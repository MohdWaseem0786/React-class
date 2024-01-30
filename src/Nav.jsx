import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Nav = () => {
  return (
  <div>
    <ul>
      <Link to='/'> Home</Link>
      <Link to='/about'> About</Link>
      <Link to='/contect'> Contect</Link>
    </ul>

  </div>
  

  )
}

export default Nav