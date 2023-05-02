import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ListItem from "./ListItem.jsx";
import Pagination from "./Pagination";
import utils from "../services/utils.jsx";

const Plants = () => {
  const { pageTitle, setPageTitle } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [plants, setPlants] = useState();
  const { getPlants } = utils();

  useEffect(() => {
    setPageTitle("Plants");
    getPlants().then(plants => setPlants(plants));
  }, []);

  return (
    <div className=''>
      {/* <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      /> */}
      <div>
        {plants
          ? plants.map((plant) => (
            <div>
              {/* ToDo: pass image as parameter when available */}
              <ListItem key={plant.species_id} id={plant.species_id} title={plant.common_name} subtitle={plant.binominal_name} filename={plant.filename} image_id={plant.image_id}></ListItem>
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

export default Plants;
