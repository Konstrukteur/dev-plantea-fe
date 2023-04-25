import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <NavLink to='/'>Home </NavLink>
        <NavLink to='/plants'>Plants </NavLink>
        <NavLink to='/recipes'>Recipes </NavLink>
        <NavLink to='/effects'>Effects </NavLink>
      </ul>
    </nav>
  );
};

export default NavMenu;
