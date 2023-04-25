import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Favorites = () => {
  const { pageTitle, setPageTitle } = useOutletContext();

  useEffect(() => {
    setPageTitle("Favorites");   
  }, []);

  return (
    <div className=''>
      <div>
      {/* link to the user-specific sections: userRecipes, userPlants, userEffects */}
      </div>
    </div>
  );
};

export default Favorites;
