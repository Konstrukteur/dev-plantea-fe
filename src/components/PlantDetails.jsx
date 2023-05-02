import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import PlantItem from "./PlantItem.jsx";
import utils from "../services/utils.jsx";

const PlantDetails = () => {
  const { pageTitle, setPageTitle } = useOutletContext();
  const { id } = useParams();
  const [plant, setPlant] = useState();
  const { getSinglePlant } = utils();

  useEffect(() => {    
    getSinglePlant(id).then(plant => {
      setPlant(plant);
      setPageTitle(plant.common_name);
    });

  }, [id]);

    return (
        <div className=''>
            <div>
                {plant ? (
                    <div>
                        <PlantItem key={plant.species_id} species_id={plant.species_id} species_name={plant.species_name} filename={plant.filename} image_id={plant.image_id} common_name={plant.common_name} binominal_name={plant.binominal_name} habitat={plant.habitat} edible_uses={plant.edible_uses} medicinal_uses={plant.medicinal_uses} />
                    </div>
                ) : (
                    "loading"
                )}
            </div>
        </div>
    );
};

export default PlantDetails;
