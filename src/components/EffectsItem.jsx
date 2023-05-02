import "../stylesheets/App.css"

const EffectsItem = ({id, name, binominal_name, imgUrl, common_name, habitat}) => {
    return (
        <div key={id} className="item">
            <img src={`https://${imgUrl}`} />
        <h4>{name}</h4>
        <h5>{binominal_name}</h5>
        <h5>{common_name}</h5>
        <p>{habitat}</p>
        </div>
    );
};

export default EffectsItem;