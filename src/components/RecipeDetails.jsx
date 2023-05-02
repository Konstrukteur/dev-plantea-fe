import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import RecipeItem from "./RecipeItem";
import utils from "../services/utils.jsx";

const RecipeDetails = () => {
    const { pageTitle, setPageTitle } = useOutletContext();
    const { id } = useParams();
    const [recipe, setRecipe] = useState();
    const { getSingleRecipe } = utils();

    const makeIngredientsArray = (recipeData) => {
        let array = [];


        for (const [key, value] of Object.entries(recipeData)) {
            if (key.includes('strIngredient') && value !== '') {
                array.push(value)
            }

        }
        return array
    }

    useEffect(() => {
        getSingleRecipe(id).then(recipe => {
            recipe.ingredientsArray = makeIngredientsArray(recipe);

            setRecipe(recipe);
            setPageTitle(recipe.strMeal);

        });

    }, [id]);

    return (
        <div className=''>
            <div>
                {recipe ? (
                    <div>
                        <RecipeItem ingredientsArray={recipe.ingredientsArray} key={recipe.idMeal} idMeal={recipe.idMeal} strMealThumb={recipe.strMealThumb} strInstructions={recipe.strInstructions} />
                    </div>
                ) : (
                    "loading"
                )}
            </div>
        </div>
    );
};

export default RecipeDetails;
