import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { pageTitle, setPageTitle } = useOutletContext();

  useEffect(() => {
    setPageTitle("Home");
  }, []);

  return (<>HOME</>);
};

export default Home;
