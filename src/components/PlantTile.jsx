import { NavLink } from "react-router-dom";

const PlantTile = ({ plant }) => {
  return (
    <div className='' key={plant.id}>
      <div>
        <NavLink to={`/plants/${plant.id}`}>
          <img src={plant.image_1 && `https://${plant.image_1}`} />
        </NavLink>
      </div>
      <table>
        <tbody>
          <tr>
            <td>Common Name</td>
            <td>{plant.common_name}</td>
          </tr>
          <tr>
            <td>Other Name</td>
            <td>{plant.other_name}</td>
          </tr>
          <tr>
            <td>Scientific Name</td>
            <td>{plant.scientific_name}</td>
          </tr>
          <tr>
            <td>Cycle</td>
            <td>{plant.cycle}</td>
          </tr>
          <tr>
            <td>Sunlight</td>
            <td>{plant.sunlight}</td>
          </tr>
          <tr>
            <td>Watering</td>
            <td>{plant.watering}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PlantTile;
