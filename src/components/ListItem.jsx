import { Link } from "react-router-dom";

const ListItem = ({ id, title, subtitle, imgUrl }) => {
    return (
        <div key={id}>         
        <Link to={`/plants/${id}`} className='itemContainer'>         
            <div className="p-2"><img src={imgUrl ? `https://${imgUrl}` : "https://via.placeholder.com/50"} /></div>
            <div className="p-2">
                <div>{title}</div>
                <div>{subtitle}</div>
            </div> 
         </Link>                                      
        </div>
    );
};

export default ListItem;
