import { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import ListItem from "./ListItem.jsx";
import PlantTile from "./PlantTile.jsx";
import Pagination from "./Pagination";

const Plants = () => {
  const { pageTitle, setPageTitle } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [plants, setPlants] = useState();
  // const secretFragment = `&key=${process.env.REACT_APP_PERENIAL_KEY}`;
  // const pageFragment = `?page=${currentPage}`;
  // const baseUrl = "http://10.0.1.22:8000/api/v1/species";
  const baseUrl = "https://plantea.aladlabs.net/api/v1/species/harvesting/n";
  const initialUrl = baseUrl; // + pageFragment + secretFragment;
  const [apiUrl, setApiUrl] = useState(initialUrl);

  useEffect(() => {
    setPageTitle("Plants");
    getData();
  }, []);

  // useEffect(() => {
  //   console.log(currentPage);
  //   setApiUrl(`localhost:8000/api/v1/species`);
  // }, [currentPage]);

  const getData = async () => {
    try {
      const response = await fetch(apiUrl);
      console.log(response);
      const json = await response.json();
      console.log(json);
      // console.log(json.data);
      // setTotalPages(json.last_page);
      setPlants(json.data);
    } catch (error) {
      console.log(error.message);
    }
  };

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
            // <div>
            //   <Link className="link" to={`/plants/${plant.id}`}>{plant.common_name}</Link>
            //   <div>{plant.binominal_name}</div>
            // </div>
            // return <PlantTile plant={plant} key={plant.binominal_name} />;
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
