import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        // using navigate hook with "-1" simulates hitting the back button
        // ToDo: replace text "Back" with left-arrow-image
        <button className="backButton" onClick={e => { navigate(-1) }}>Back</button>
    );
}

export default BackButton;