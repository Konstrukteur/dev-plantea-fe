import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        // using navigate hook with "-1" simulates hitting the back button        
        <button className="backButton btn" onClick={e => { navigate(-1) }}>
            <img src="./images/back.png" alt="Back" />
        </button>
    );
}

export default BackButton;