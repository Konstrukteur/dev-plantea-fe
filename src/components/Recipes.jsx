import { useState, useEffect } from "react";
import PlantTile from "./PlantTile.jsx";
import Pagination from "./Pagination";

const Recipes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [recipes, setRecipes] = useState();
  // const secretFragment = `&key=${process.env.REACT_APP_PERENIAL_KEY}`;
  // const pageFragment = `?page=${currentPage}`;
  // const baseUrl = "http://10.0.1.22:8000/api/v1/recipes";
  const baseUrl = "https://plantea.aladlabs.net/api/v1/recipes";
  const initialUrl = baseUrl; // + pageFragment + secretFragment;
  const [apiUrl, setApiUrl] = useState(initialUrl);

  const getData = async () => {
    try {
      const response = await fetch(apiUrl);
      console.log(response);
      const json = await response.json();
      console.log(json);
      // console.log(json.data);
      // setTotalPages(json.last_page);
      setRecipes(json.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect(() => {
  //   console.log(currentPage);
  //   setApiUrl(`localhost:8000/api/v1/recipes`);
  // }, [currentPage]);

  useEffect(() => {
    console.log("Hello World!");
    getData();
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
          ? recipes.map((recipe) => {
            return <PlantTile plant={recipe} key={recipe.latin_name} />;
          })
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
