import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav-container">
      <NavLink to="/html">
        {({ isActive }) => (
          <button className={isActive ? 'active' : ''}>HTML</button>
        )}
      </NavLink>
      
      <NavLink to="/css">
        {({ isActive }) => (
          <button className={isActive ? 'active' : ''}>CSS</button>
        )}
      </NavLink>
      
      <NavLink to="/javascript">
        {({ isActive }) => (
          <button className={isActive ? 'active' : ''}>JavaScript</button>
        )}
      </NavLink>
      
      <NavLink to="/react">
        {({ isActive }) => (
          <button className={isActive ? 'active' : ''}>React</button>
        )}
      </NavLink>
      
      <NavLink to="/sanity">
        {({ isActive }) => (
          <button className={isActive ? 'active' : ''}>Sanity</button>
        )}
      </NavLink>
    </nav>
  );
}

export default Nav;