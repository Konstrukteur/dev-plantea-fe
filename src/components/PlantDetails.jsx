import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import PlantItem from "./PlantItem";

const PlantDetails = () => {
    const { pageTitle, setPageTitle } = useOutletContext();
    const title = useParams();
    const [plant, setPlant] = useState();
    // const secretFragment = `?key=${process.env.REACT_APP_PERENIAL_KEY}`;
    const baseUrl = "https://plantea.aladlabs.net/api/v1/species/";
    // const baseUrl = "http://10.0.1.22:8000/api/v1/species/";
    const initialUrl = baseUrl + title.id;
    const [apiUrl, setApiUrl] = useState(initialUrl);

    useEffect(() => {
        // todo: update with title of plant
        setPageTitle("Plant Details");
        getData();
    }, [apiUrl]);

    const getData = async () => {
        try {
           // console.log(initialUrl)
            const response = await fetch(apiUrl);
            const json = await response.json();
            setPlant(json);
        } catch (error) {
            console.log(error.message);
        }
    };

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
