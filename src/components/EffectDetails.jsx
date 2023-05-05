import { useState, useEffect } from "react";
import { NavLink, useOutletContext, useParams } from "react-router-dom";
import EffectsItem from "./EffectsItem";
import EffectSpecies from "./EffectSpecies";
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
            <EffectsItem key={effect.id} id={effect.id} description={effect.description} />
          </div>
        ) : (
          "loading"
        )}
        { effect && <EffectSpecies effect={effect} />}
      </div>
    </div>
  );
};

export default EffectDetails;
