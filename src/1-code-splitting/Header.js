import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>Code splitting</h1>
      <nav>
        <ul>
          <li>
            <NavLink to='/foo'>Foo</NavLink>
          </li>
          <li>
            <NavLink to='/bar'>Bar</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
