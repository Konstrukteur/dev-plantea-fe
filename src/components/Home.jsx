import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import Modal from "./Modal.jsx";
import utils from "../services/utils.jsx";

const Home = () => {
  const { pageTitle, setPageTitle } = useOutletContext();
  const { selectedHemisphere, setSelectedHemisphere } = useOutletContext();
  const [modalVisible, setModalVisible] = useState(true);
  const [plant, setPlant] = useState();
  const [recipes, setRecipes] = useState([]);
  const { getPlants, getRecipesByIngredient } = utils();

  useEffect(() => {
    setPageTitle("Plantea");
  }, []);

  useEffect(() => {
    if (selectedHemisphere) {
      getPlants(selectedHemisphere).then(plants => {
        // get random plant from results list
        const rand = Math.floor(Math.random() * plants.length);
        const randPlant = plants[rand];
        setPlant(randPlant);
        //console.log(randPlant)
      })
    }  
  }, [selectedHemisphere]);

  useEffect(() => {
    if (selectedHemisphere && plant) {
      console.log("Home - useEffect: " + plant.common_name)

      getRecipesByIngredient(plant.common_name).then(recipes => setRecipes(recipes))
    }
  }, [plant]);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    setSelectedHemisphere("north");
  };

  return (
    <> {
      selectedHemisphere ? (
        plant ? (<div>
          <div>Plant of the Day</div>
          <h4><a href={`plants/${plant.species_id}`}>{plant.common_name}</a></h4>
          {/* Todo: adjust image size */}
          <img className="plantItemImg" src={plant.image_id ? `https://plantea.aladlabs.net/images/${plant.image_id}/${plant.filename}` : "https://via.placeholder.com/200"} alt="Featured Plant" />
          <div className="container text-start">
            <div>This is why we love {plant.common_name} so much:</div>
            <div>Positive effects on the body:</div>
            <ul>
              {/* todo: use collapsible component and show max. first five results */}
              {
                plant.effects.map((effect) => (
                  <li key={effect.id}><a href="">{effect.name}</a></li>
                ))
              }
            </ul>
            <div>Have fun trying some of our favorite recipes:</div>
            <ul>
              {/* todo: use collapsible component and show max. first five results */}
              {recipes ? (
                recipes.map((recipe) => (
                  <li key={recipe.id}><a href="">{recipe.name}</a></li>
                ))
              ) : (
                <div>no recipes yet</div>
              )}
            </ul>
          </div>
        </div>) : (
          <div>loading</div>
        )
      ) : (
        <div>
          <p>No plants available.</p>
          <Modal show={modalVisible} handleClose={hideModal}>
            <p>Please note that your region is pre-set to <em>northern</em> hemisphere.</p>
            <p>Go to <Link to='/location'>Location</Link> page to change.</p>
          </Modal>
        </div>
      )
    }
    </>);
};

export default Home;
