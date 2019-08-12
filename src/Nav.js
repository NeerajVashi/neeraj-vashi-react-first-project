import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <table className="table">
      <thead className="thead-light container mx-4">
        <tr>
          <th><Link to='/'>Home </Link> </th>
          <th><Link to = '/books'>Books </Link> </th>
          <th><Link to = '/authors'>Authors </Link> </th>
          <th> <Link to = '/Register'>Registration</Link> </th>
          <th> <Link to = '/login'>Login</Link> </th>
        </tr>
      </thead>
    </table>
  )
}

export default Nav;