import { useEffect } from "react";

// MenuBar at the top with navigate "Back" function, Page Title and Burger Menu

const MenuBar = () => {
  useEffect(() => {
    console.log("Hello from MenuBar!");   
  }, []);

  return (
    <div className=''>
      <div>
      <h3>Top Menu</h3>
      </div>
    </div>
  );
};

export default MenuBar;
