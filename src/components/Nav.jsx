import { NavLink } from 'react-router-dom';


const Nav = () => (
  
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/tabletennis" element={<NavLink />} /></li>
      <li><NavLink to="//pickleball" element={<NavLink />} /></li>
      <li><NavLink to="/tennis" element={<NavLink />} /></li>
    </ul>
  </nav>


);

export default Nav;