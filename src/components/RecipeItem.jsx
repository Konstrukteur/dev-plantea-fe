import React from "react";
import "../stylesheets/App.css"

const RecipeItem = ({ idMeal, strMealThumb, ingredientsArray, strInstructions }) => {
    const myIngr = ingredientsArray;
    const myIngrList = myIngr.map((str, i) => <li key={i}>{str}</li>);
    const myInstructions = strInstructions;
    const myInstArray = myInstructions.split('.');
    const myInstList = myInstArray.map((step, index) => {
        const trimmedStep = step.trim();
        return trimmedStep ? <li key={index}>{trimmedStep}</li> : null;
    });

    return (
        <div key={idMeal} className="item">
            <div>
                <img className="recipeImg"
                    src={strMealThumb}
                    alt=""
                />
            </div>
            <ol>{myIngrList}</ol>
            <ol>{myInstList}</ol>
        </div>
    );
};

export default RecipeItem;
