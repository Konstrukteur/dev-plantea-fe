import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Plant = () => {
  const title = useParams();
  const [plant, setPlant] = useState();
  // const secretFragment = `?key=${process.env.REACT_APP_PERENIAL_KEY}`;
  const baseUrl = "https://plantea.aladlabs.net/api/v1/species/";
  // const baseUrl = "http://10.0.1.22:8000/api/v1/species/";
  const initialUrl = baseUrl + title.id;
  const [apiUrl, setApiUrl] = useState(initialUrl);

  const getData = async () => {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      setPlant(json);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [apiUrl]);

  return (
    <div className=''>
      <div>
        {plant ? (
          <>
            <img src={plant && `https://${plant.image_2}`} />
            <table>
              <tbody>
                <tr>
                  <td>Common name</td>
                  <td>{plant.name}</td>
                </tr>
                <tr>
                  <td>Scientific name</td>
                  <td>{plant.latin_name}</td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          "loading"
        )}
      </div>
    </div>
  );
};

export default Plant;
