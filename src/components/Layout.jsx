import { useState } from "react";
import { Outlet } from "react-router-dom";
import BackButton from "./BackButton";
// import useAuth from "../hooks/useAuth";

const Layout = () => {
  const [pageTitle, setPageTitle] = useState("")
  //   const { isAuthenticated, signOutUser, loginUser } = useAuth();

  return (
    <>
      <div className='topContainer'>
        <div><BackButton /></div>
        <div><h3>{pageTitle}</h3></div>
      </div>

      <Outlet context={{ pageTitle, setPageTitle }}/>
    </>
  );
};

export default Layout;
