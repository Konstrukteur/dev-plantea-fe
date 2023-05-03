import { Link } from "react-router-dom";
import "../stylesheets/App.css";

const ListItem = ({ id, title, image_id, filename, strMealThumb, subtitle }) => {

    const baseUrl = "https://plantea.aladlabs.net";
    //console.log(image_id)
    let imageUrl;
    if (image_id) {
      imageUrl = `${baseUrl}/images/${image_id}/${filename}`;
    } else {
      imageUrl = strMealThumb;
    }

    return (
        <div key={id}>         
        <Link to={`${id}`} className='itemContainer'>         
            <div className="p-2"><img className="itemImg" src={imageUrl} /></div>
            <div className="p-2">
                <div>{title}</div>
                <div>{subtitle}</div>
            </div> 
         </Link>                                      
        </div>
    );
};

export default ListItem;
