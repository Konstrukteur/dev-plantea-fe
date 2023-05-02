import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import EffectsItem from "./EffectsItem";
import utils from "../services/utils.jsx";

const EffectDetails = () => {
  const { pageTitle, setPageTitle } = useOutletContext();
  const {id } = useParams();
  const [effect, setEffect] = useState();
  const { getSingleEffect } = utils();

  useEffect(() => {   
    setPageTitle("Effect Details");
    getSingleEffect(id).then(effect => {
      setEffect(effect);
      setPageTitle(effect.name)
    });
  }, [id]);

  return (
    <div className=''>
      <div>
        {effect ? (
          <div>
            <EffectsItem key={effect.id} id={effect.id} name={effect.name} common_name={effect.common_name} binominal_name={effect.binominal_name} habitat={effect.habitat}/>
          </div>
        ) : (
          "loading"
        )}
      </div>
    </div>
  );
};

export default EffectDetails;
