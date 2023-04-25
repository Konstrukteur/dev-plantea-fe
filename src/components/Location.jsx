import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Location = () => {
  const { pageTitle, setPageTitle } = useOutletContext();

  useEffect(() => {
    setPageTitle("Location");
  }, []);

  return (
    <div className=''>
      <div>
        <h2>Location Page</h2>
      </div>
    </div>
  );
};

export default Location;
