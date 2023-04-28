import { useState } from "react";
import { Outlet } from "react-router-dom";
import BackButton from "./BackButton";
// import useAuth from "../hooks/useAuth";

const Layout = () => {
  const [pageTitle, setPageTitle] = useState("")
  //   const { isAuthenticated, signOutUser, loginUser } = useAuth();

  return (
    <>
      <div className='topContainer d-flex align-items-center'>
        <div><BackButton /></div>
        <div className="pt-1"><h3>{pageTitle}</h3></div>
      </div>

      <Outlet context={{ pageTitle, setPageTitle }}/>
    </>
  );
};

export default Layout;
