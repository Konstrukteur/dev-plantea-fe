import { useState } from "react";
import { Outlet } from "react-router-dom";
import BackButton from "./BackButton";
// import useAuth from "../hooks/useAuth";

const Layout = () => {
  // pageTitle is needed in every component page
  const [pageTitle, setPageTitle] = useState("");
  // hemisphere is needed in Location and Plants component
  const [selectedHemisphere, setSelectedHemisphere] = useState("");
  //   const { isAuthenticated, signOutUser, loginUser } = useAuth();

  return (
    <>
      <div className='topContainer d-flex align-items-center'>
        <div><BackButton /></div>
        <div className="pt-1"><h3>{pageTitle}</h3></div>
      </div>

      <Outlet context={{ pageTitle, setPageTitle, selectedHemisphere, setSelectedHemisphere }}/>
    </>
  );
};

export default Layout;
