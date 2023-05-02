import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ToggleSwitch from "../controls/ToggleSwitch.jsx";
import Map from "./Map.jsx";
import utils from "../services/utils.jsx";

// default: location is set automatically, i.e. retrieved from IP --> long, lat --> displayed in leaflet map
// switch to manual: static leaflet world map shows with top/bottom (=north/south) sections selectable to set hemisphere

const Location = () => {
  const { pageTitle, setPageTitle } = useOutletContext();
  const { selectedHemisphere, setSelectedHemisphere } = useOutletContext();
  const [loading, setLoading] = useState(true);
  const [automatic, setAutomatic] = useState(true);
  const [ipAddress, setIpAddress] = useState();  
  const { getMyIp } = utils();

  useEffect(() => {
    setPageTitle("Location");
  }, []);

  useEffect(() => {
    if (automatic) {
      try {
        setLoading(true);
        getMyIp().then(data => {
          setIpAddress(data);
          setSelectedHemisphere(data.latitude < 0 ? "southern" : "northern");          
          setLoading(false);                    
        });
      } catch (error) {
        // automatic is set, but IP cannot be retrieved -> switch to manual
        console.log(error);
        setAutomatic(false);
      }
    } else {
      setSelectedHemisphere("");
    }
  }, [automatic]);

  function handleToggleChange(newValue) {
    setAutomatic(newValue);
  }

  return (
    <>
      <div className='d-flex justify-content-between mx-4 my-3'>
        <div>Set location</div>
        <ToggleSwitch textOn="Automatic" textOff="Manual" isOn={automatic} setIsOn={setAutomatic} onChange={handleToggleChange} />
      </div>
      {
        automatic ?
          (
            loading ?
              (
                <div className="d-flex justify-content-center mt-5">
                  <div className="spinner-border" style={{ width: "3rem", height: '3rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                <div>
                  <div>Your location is set to {ipAddress.city} in {ipAddress.country_name}.</div>
                  <div>This belongs to the <em>{selectedHemisphere}</em> hemisphere.</div>
                  <Map lng={ipAddress.longitude} lat={ipAddress.latitude} zoom={8} />
                </div>
              )
          ) : (
            <div>
              {!selectedHemisphere ? <div>Please select hemisphere in the map!</div> : <div>You selected the <em>{selectedHemisphere}</em> hemisphere</div>}
              <Map lng={0} lat={0} zoom={2} selectedHemi={selectedHemisphere} setSelectedHemi={setSelectedHemisphere} />
            </div>
          )
      }
    </>
  );
};

export default Location;
