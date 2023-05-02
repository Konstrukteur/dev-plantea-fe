import React from "react";
import "../stylesheets/App.css"

const PlantItem = ({ species_id, species_name, image_id, filename, common_name, binominal_name, habitat, edible_uses, medicinal_uses}) => {

    return (
        <div key={species_id} className="item">
            <h4>{species_name}</h4>
            <div><img  src={image_id ? `https://plantea.aladlabs.net/images/${image_id}/${filename}` : "https://via.placeholder.com/50"} alt="" /></div>
            <h5>{common_name}</h5>
            <h5>{binominal_name}</h5>
            <p>{habitat}</p>
            <p>{edible_uses}</p>
            <p>{medicinal_uses}</p>
        </div>
    );
};


export default PlantItem;