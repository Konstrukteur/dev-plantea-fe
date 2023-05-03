import React from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/App.css"

const RecipeItem = ({ idMeal, strMealThumb, ingredients, strInstructions }) => {
    const myIngr = ingredients;
    console.log(myIngr)
    const myIngrList = myIngr.map((str, i) =>  str.specie_id != "" ? <li key={i}><NavLink to={"/plants/" + str.specie_id}>{str.name}</NavLink> {str.measure}</li> :  <li key={i}>({str.name} {str.measure})</li>);
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
