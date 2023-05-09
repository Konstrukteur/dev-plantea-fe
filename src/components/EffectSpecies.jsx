import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import PlantTile from "./PlantTile";
import utils from "../services/utils.jsx";

const EffectSpecies = ({ effect }) => {
    const { pageTitle, setPageTitle } = useOutletContext();
    const [ plants, setPlants ] = useState();
    const { getPlantsforEffect } = utils();

    console.log(effect.id);
    console.log(plants);

    useEffect(() => {   
        setPageTitle("Effect Details");
        getPlantsforEffect(effect.id).then(plants => {
            console.log(plants);
            setPlants(plants);
          setPageTitle(effect.name)})
    }, [])

    return (
        <>
        {plants && plants.map((plant) => {return <PlantTile plant={plant} id={plant.specieId} specie_name={plant.specie_name} />})}
        </>
    )

}

export default EffectSpecies;