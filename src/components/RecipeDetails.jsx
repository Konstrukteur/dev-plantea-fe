import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import RecipeItem from "./RecipeItem";


const RecipeDetails = () => {
    const { pageTitle, setPageTitle } = useOutletContext();
    const title = useParams();
    const [recipe, setRecipe] = useState();
    // const secretFragment = `?key=${process.env.REACT_APP_PERENIAL_KEY}`;
    const baseUrl = "https://plantea.aladlabs.net/api/v1/recipes/";
    // const baseUrl = "http://10.0.1.22:8000/api/v1/recipes/";
    const initialUrl = baseUrl + title.id;
    const [apiUrl, setApiUrl] = useState(initialUrl);

    useEffect(() => {
        // todo: update with title of recipe
        setPageTitle("Recipe Details");
        getData();
    }, [apiUrl]);

    const getData = async () => {
        try {
            const response = await fetch(apiUrl);
            const json = await response.json();
            setRecipe(json);
        } catch (error) {
            console.log(error.message);
        }
    };

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
