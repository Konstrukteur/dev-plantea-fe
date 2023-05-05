import { useState, useEffect } from "react";
import { NavLink, useOutletContext, useParams } from "react-router-dom";
import RecipeItem from "./RecipeItem";
import utils from "../services/utils.jsx";
import "../stylesheets/App.css"

const RecipeDetails = () => {
    const { pageTitle, setPageTitle } = useOutletContext();
    const { id } = useParams();
    const [recipe, setRecipe] = useState();
    const { getSingleRecipe } = utils();


   // console.log(recipe);
    const createRecipeIngredients = (recipe) => {
        recipe["ingredients"] = [];

        for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const specie = recipe[`specieId${i}`] || "";
        const measure = recipe[`strMeasure${i}`];

        if (ingredient !== "") {
            recipe["ingredients"].push({
            id: id,
            name: ingredient,
            specie_id: specie,
            measure: measure,
        })

        }
        delete recipe[`strIngredient${i}`];
        delete recipe[`specieId${i}`];
        delete recipe[`strMeasure${i}`];
        }
        console.log(recipe);

        return recipe;
    }

    useEffect(() => {
        getSingleRecipe(id).then(recipe => {
            // recipe.ingredientsArray = makeIngredientsArray(recipe);
            recipe = createRecipeIngredients(recipe);
            setPageTitle(recipe.strMeal);
            setRecipe(recipe);

        });

    }, [id]);

    return (
        <div className=''>
            <div>
                {recipe ? (
                    <div>
                        <RecipeItem ingredients={recipe.ingredients} key={recipe.idMeal} idMeal={recipe.idMeal} strMealThumb={recipe.strMealThumb} strInstructions={recipe.strInstructions} />
                    </div>
                ) : (
                    "loading"
                )}
            </div>
            <div>
                {recipe ? recipe.effects.map((effect) => <NavLink to={`/effects/${effect.id}`} ><li className="item">{effect.name}</li></NavLink>) : (
                    "loading"
                )}
            </div>
        </div>
    );
};

export default RecipeDetails;
