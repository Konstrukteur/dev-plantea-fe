import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Pagination from "./Pagination.jsx";
import EffectsList from "./EffectsList.jsx";
import utils from "../services/utils.jsx";

const Effects = () => {
  const { pageTitle, setPageTitle } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [effects, setEffects] = useState(); 
  const { getEffects } = utils();

  useEffect(() => {
    setPageTitle("Effects");
    getEffects().then(effects => setEffects(effects));   
  }, []);

  return (
    <div className=''>
      {/* <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      /> */}
      <div>
        {effects
          ? effects.map((effect) => (
            <div>
              <EffectsList key={effect.id} id={effect.id} name={effect.name}/>
              <div className='item'>{effect.description}</div>
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

export default Effects;
