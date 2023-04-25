import { useEffect } from "react";
import BackButton from "./BackButton";

// ToDo: make Page Title dynamic! 
// Should display current page title like "Recipes", "Plants", "Recipe Name", ...

const MenuBar = () => {
  useEffect(() => {
    //console.log("Hello from MenuBar!");
  }, []);

  return (
    <div className='topContainer'>
      <div><BackButton /></div>
      <div><h3>Page Title</h3></div>
    </div>
  );
};

export default MenuBar;
