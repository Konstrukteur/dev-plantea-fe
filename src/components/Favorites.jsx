import { useEffect } from "react";

const Favorites = () => {
  useEffect(() => {
    console.log("Hello from Favorites!");   
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
