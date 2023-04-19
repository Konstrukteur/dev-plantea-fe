import { NavLink, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import NavMenu from "./NavMenu";

const Layout = () => {
  //   const { isAuthenticated, signOutUser, loginUser } = useAuth();

  return (
    <>
      <h1 className='ui header'>
        <i className='icon settings' />

        <div className='content'>Delicious</div>
      </h1>
      <NavMenu />

      <Outlet />
    </>
  );
};

export default Layout;
