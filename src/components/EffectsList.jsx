import { Link } from "react-router-dom";

const EffectList = ({id, name, condition_name, description}) => {
return (
    <div key={id} className="item">
        <Link to={`${id}`} className='itemContainer'>
        <h4>{name}</h4>
        <p>{description}</p>
        <h5>{condition_name}</h5>
        </Link>
    </div>
)
}

export default EffectList;