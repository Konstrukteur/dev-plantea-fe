import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const title = useParams();
  const [recipe, setRecipe] = useState();
  // const secretFragment = `?key=${process.env.REACT_APP_PERENIAL_KEY}`;
  const baseUrl = "https://plantea.aladlabs.net/api/v1/recipes/";
  // const baseUrl = "http://10.0.1.22:8000/api/v1/recipes/";
  const initialUrl = baseUrl + title.id;
  const [apiUrl, setApiUrl] = useState(initialUrl);

  const getData = async () => {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      setRecipe(json);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [apiUrl]);

  return (
    <div className=''>
      <div>
        {recipe ? (
          <>
            <img src={recipe && `https://${recipe.image}`} />
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{recipe.name}</td>
                </tr>                
              </tbody>
            </table>
          </>
        ) : (
          "loading"
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
