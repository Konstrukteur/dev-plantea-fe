import "../stylesheets/App.css"


const EffectsItem = ({id, description}) => {
    return (
        <div key={id} className="item">
        <p>{description}</p>
        </div>
    );
};

export default EffectsItem;