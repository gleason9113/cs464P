import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
       <ul>
          <li>
             <NavLink to="/">Home</NavLink>
          </li>
          <li>
             <NavLink to="/search">Search</NavLink>
          </li>
          <li>
             <NavLink to="/visual">Graph</NavLink>
          </li>
       </ul>
 </nav>
  );
};

