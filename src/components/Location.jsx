import { useEffect } from "react";

const Location = () => {
  useEffect(() => {
    console.log("Hello from Location!");   
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
