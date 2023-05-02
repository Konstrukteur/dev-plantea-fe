import React from "react";
import "../stylesheets/App.css"


const RecipeItem = ({ id, imgUrl, name, ingredientLines, portions, prep_time, cook_time, instructions }) => {
    const myInstructions = instructions;
    const myInstArray = myInstructions.split(/\d+.\s+/);
    const myInstList = myInstArray.map((step, index) => <li key={index}>{step}</li>);
  
    return (
      <div key={id} className="item">
        <h4>{name}</h4>
        <div>
          <img src={imgUrl ? `https://${imgUrl}` : "https://via.placeholder.com/50"} alt="" />
        </div>
        <p>Portions {portions}{/* {} */}</p>
        <p>Preparation time {prep_time}{/* {} */}</p>
        <p>Cook time {cook_time}{/* {} */}</p>
        <ul>{ingredientLines}{/* {} */}</ul>
        <h4>Instructions</h4>
        <ol>{myInstList}</ol>
      </div>
    );
  };
  
  export default RecipeItem; 
  

  /* const RecipeItem = ({id, imgUrl, name, ingredientLines, portions, prep_time, cook_time, instructions}) => {
const myInstructions = instructions;
  const myInstArray = myInstructions.split("\\n\\n");
  const myInstList = myInstArray.map((step, index) => <li key={index}>{step}</li>);
  

  return (
    <div key={id} className="item">
      <h4>{name}</h4>
      <div>
        <img src={imgUrl ? `https://${imgUrl}` : "https://via.placeholder.com/50"} alt="" />
      </div>
      <p>Portions {portions}</p>
      <p>Preparation time {prep_time}</p>
      <p>Cook time {cook_time}</p>
      <ul>{ingredientLines}</ul>
      <h4>Instructions</h4>
      <ul>{myInstList}</ul>
 
    </div>
  );
};

export default RecipeItem; */