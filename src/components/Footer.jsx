import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    console.log("Hello from Footer!");   
  }, []);

  return (
    <div className=''>
      <div>
      FOOTER
      </div>
    </div>
  );
};

export default Footer;
