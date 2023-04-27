// Check this for help: https://blog.logrocket.com/react-leaflet-tutorial/
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ lng, lat, zoom }) => {
    const position = [lat, lng];  

    return (
        <div className="leaflet-container">
            {/* if lat,lng --> show map with marker */}
            <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>You are here</Popup>
                </Marker>
            </MapContainer>
            {/* else show static world map with northern, southern section selectable */}
        </div>
    );
}

export default Map;
