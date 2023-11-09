import { NavLink } from 'react-router-dom';


const Nav = ({ useForQuery }) => (
  
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/tabletennis" onClick = {() => useForQuery("Table Tennis")}> Table Tennis </NavLink></li>
      <li><NavLink to="/pickleball" onClick = {() => useForQuery("Pickle Ball")}> Pickle Ball </NavLink></li>
      <li><NavLink to="/tennis" onClick = {() => useForQuery("Tennis")}> Tennis </NavLink></li>
    </ul>
  </nav>


);

export default Nav;