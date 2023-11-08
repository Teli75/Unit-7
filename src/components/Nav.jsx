import { NavLink } from 'react-router-dom';


const Nav = () => (
  
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/tabletennis"> Table Tennis </NavLink></li>
      <li><NavLink to="/pickleball"> Pickle Ball </NavLink></li>
      <li><NavLink to="/tennis"> Tennis </NavLink></li>
    </ul>
  </nav>


);

export default Nav;