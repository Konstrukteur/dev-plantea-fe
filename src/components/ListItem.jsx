import { Link } from "react-router-dom";
import "../stylesheets/App.css";

const ListItem = ({ id, title, image_id, filename, subtitle }) => {

    return (
        <div key={id}>         
        <Link to={`${id}`} className='itemContainer'>         
            <div className="p-2"><img className="plantItemImg" src={image_id ? `https://plantea.aladlabs.net/images/${image_id}/${filename}` : "https://via.placeholder.com/50"} /></div>
            <div className="p-2">
                <div>{title}</div>
                <div>{subtitle}</div>
            </div> 
         </Link>                                      
        </div>
    );
};

export default ListItem;
