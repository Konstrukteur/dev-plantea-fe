import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ListItem from "./ListItem";
import utils from "../services/utils.jsx";
import Pagination from "./Pagination";

const Recipes = () => {
  const { pageTitle, setPageTitle } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [recipes, setRecipes] = useState();
  const { getRecipes } = utils();

  useEffect(() => {
    setPageTitle("Recipes");
    getRecipes().then( recipes => setRecipes(recipes));
  }, []);

  return (
    <div className=''>
      {/* <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      /> */}
      <div>
        {recipes
          ? recipes.map((recipe) => (
            <div>        
                <ListItem key={recipe.id} id={recipe.id} title={recipe.name}/>   
            </div>                      
          ))
          : "loading..."}
      </div>
      {/* <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      /> */}
    </div>
  );
};

export default Recipes;
