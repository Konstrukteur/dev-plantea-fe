import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import RecipeItem from "./RecipeItem";
import utils from "../services/utils.jsx";

const RecipeDetails = () => {
  const { pageTitle, setPageTitle } = useOutletContext();
  const { id } = useParams();
  const [recipe, setRecipe] = useState(); 
  const { getSingleRecipe } = utils();

  useEffect(() => {  
    getSingleRecipe(id).then(recipe => 
      {   
        setRecipe(recipe);
        setPageTitle(recipe.name);
      });

  }, [id]);

  return (
    <div className=''>
      <div>
        {recipe ? (
          <div>
            <RecipeItem key={recipe.id} id={recipe.id} name={recipe.name} image={recipe.image} portions={recipe.portions} prep_time={recipe.prep_time} cook_time={recipe.cook_time} instructions={recipe.instructions} />
          </div>
        ) : (
          "loading"
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
