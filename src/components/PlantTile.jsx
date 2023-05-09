import { NavLink } from "react-router-dom";
import "../stylesheets/App.css";
const PlantTile = ({ plant, specie_name }) => {

  plant && console.log(plant)

  return (
    <div className='item' key={plant.specieId}>
      <div>
        <NavLink to={`/plants/${plant.specieId}`}>
            <h5>{specie_name}</h5>
          <img className="plantItemImg" src={plant && `https://plantea.aladlabs.net/images/${plant.image_id}/${plant.filename}`} />
        </NavLink>
      </div>
    </div>
  );
};

export default PlantTile;
