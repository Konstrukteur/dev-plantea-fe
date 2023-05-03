import "../stylesheets/App.css"


const EffectsItem = ({id, name, description, condition_name}) => {
    return (
        <div key={id} className="item">
        <h4>{name}</h4>
        <p>{description}</p>
        <p>{condition_name}</p>
        </div>
    );
};

export default EffectsItem;