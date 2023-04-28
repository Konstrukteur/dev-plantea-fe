// Check this for help: https://blog.logrocket.com/react-leaflet-tutorial/
import { MapContainer, TileLayer, Marker, Popup, Rectangle } from "react-leaflet";

const Map = ({ lng, lat, zoom, selectedHemi, setSelectedHemi }) => {
    const position = [lat, lng];       

    const handleUpperClick = () => {
        setSelectedHemi("northern");
    };

    const handleLowerClick = () => {
        setSelectedHemi("southern");
    };

    const getStyle = (half) => {
        if (half === selectedHemi) {
            return { color: "red", weight: 1 };
        } else {
            return { color: "black", weight: 0 };
        }
    };

    return (
        <>
            <div className="leaflet-container">
                {/* if lat,lng is set --> show interactive map with marker */}
                {/* else show static world map with northern, southern section clickable */}
                {lat !== 0 || lng !== 0 ? (
                    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>You are here</Popup>
                        </Marker>
                    </MapContainer>
                ) : (
                    <>
                        <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} dragging={false} zoomControl={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Rectangle
                                bounds={[[90, -180], [0, 180]]}                               
                                eventHandlers={{
                                    click: () => {
                                        handleUpperClick();
                                    },
                                }}
                                pathOptions={getStyle("northern")}
                            />
                            <Rectangle
                                bounds={[[0, -180], [-90, 180]]}                               
                                eventHandlers={{
                                    click: () => {
                                        handleLowerClick();
                                    },
                                }}
                                pathOptions={getStyle("southern")}
                            />
                        </MapContainer>
                    </>
                )
                }
            </div>
        </>
    );
}

export default Map;
