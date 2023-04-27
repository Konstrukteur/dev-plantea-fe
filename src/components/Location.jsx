import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ToggleSwitch from "../controls/ToggleSwitch.jsx";
import Map from "./Map.jsx";
import utils from "../services/utils.jsx";

// default: location is set automatically, i.e. retrieved from IP --> long, lat --> show in leaflet map
// switch to manual: leaflet map shows with top/bottom (=north/south) sections selectable to set hemisphere

const Location = () => {
  const { pageTitle, setPageTitle } = useOutletContext();
  const [loading, setLoading] = useState(true);
  const [automatic, setAutomatic] = useState(true);
  const [ipAddress, setIpAddress] = useState();
  const { getMyIp } = utils();

  useEffect(() => {
    setPageTitle("Location");
  }, []);

  useEffect(() => {
    console.log("Auto: " + automatic)
    if (automatic) {
      setLoading(true);
      getMyIp().then(data => {
        setIpAddress(data);
        setLoading(false);
      });
    }
  }, [automatic]);

  function handleToggleChange(newValue) {
    setAutomatic(newValue);
  }

  return (
    <>
      <div className='d-flex justify-content-between mx-4 my-3'>
        <div>Set location</div>
        <ToggleSwitch textOn="Automatic" textOff="Manual" onChange={handleToggleChange} />
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
                  <Map lng={ipAddress.longitude} lat={ipAddress.latitude} zoom={13} />
                </div>
              )
          ) : (
            <div>
              Please select hemisphere in the map!
              <Map lng={0} lat={0} zoom={2} />
            </div>
          )
      }
    </>
  );
};

export default Location;
