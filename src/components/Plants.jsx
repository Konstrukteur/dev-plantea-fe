import { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import ListItem from "./ListItem.jsx";
import Modal from "./Modal.jsx";
import Pagination from "./Pagination";
import utils from "../services/utils.jsx";

const Plants = () => {
  const { pageTitle, setPageTitle } = useOutletContext();
  const { selectedHemisphere, setSelectedHemisphere } = useOutletContext();
  // set once for pagination control
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [modalVisible, setModalVisible] = useState(true);
  const [plants, setPlants] = useState();
  const { getPlants, getPlantsPerPage, getPlantCount } = utils();

  useEffect(() => {
    setPageTitle("Plants");
  }, []);

  useEffect(() => {
    // general get plants:
    // getPlants().then(plants => setPlants(plants));


    if (selectedHemisphere) {
      // --> set number of pages depending on total items count and items per page
      getPlants(selectedHemisphere).then(plants => setTotalPages(Math.ceil(plants.length / itemsPerPage)));
      // get plant count from API returns total number of plants in DB - NOT specific for month and region
      // todo in backend: make available in API
      //getPlantCount().then(count => setTotalPages(Math.ceil(count / itemsPerPage)));     

      // get plants from specific hemisphere, paginated
      getPlantsPerPage(currentPage, itemsPerPage, selectedHemisphere).then(plants => setPlants(plants));
    }
  }, [currentPage, itemsPerPage, selectedHemisphere]);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <div className=''>  {
      selectedHemisphere ? <>
        <div className="pageContainer">
          <div>These plants are available in ***month*** in the <em>{selectedHemisphere}</em> hemisphere.</div>
          {plants
            ? plants.map((plant) => (
              <div>
                <ListItem key={plant.species_id} id={plant.species_id} title={plant.common_name} subtitle={plant.binominal_name} filename={plant.filename} image_id={plant.image_id}></ListItem>
              </div>
            ))
            : "loading..."}
        </div>

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </> : <div>
        <p>No plants available.</p>
        <Modal show={modalVisible} handleClose={hideModal}>
          <p>Please go to <Link to='/location'>Location</Link> page and select your preferred hemisphere to view the relevant plants.</p>
        </Modal>
      </div>
    }
    </div>
  );
};

export default Plants;
