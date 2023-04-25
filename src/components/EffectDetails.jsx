import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const EffectDetails = () => {
  const { pageTitle, setPageTitle } = useOutletContext();
  const title = useParams();
  const [effect, setEffect] = useState();
  // const secretFragment = `?key=${process.env.REACT_APP_PERENIAL_KEY}`;
  const baseUrl = "https://plantea.aladlabs.net/api/v1/species/";
  // const baseUrl = "http://10.0.1.22:8000/api/v1/species/";
  const initialUrl = baseUrl + title.id;
  const [apiUrl, setApiUrl] = useState(initialUrl);

  useEffect(() => {
    // todo: update with title of effect
    setPageTitle("Effect Details");
    getData();
  }, [apiUrl]);

  const getData = async () => {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      setEffect(json);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className=''>
      <div>
        {effect ? (
          <>
            <img src={effect && `https://${effect.image}`} />
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{effect.name}</td>
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

export default EffectDetails;
