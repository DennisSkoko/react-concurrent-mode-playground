import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>Full example</h1>
      <nav>
        <ul>
          <li>
            <NavLink to='/users'>Users</NavLink>
          </li>
          <li>
            <NavLink to='/albums'>Albums</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
