const utils = () => {

    // Find API description for getting user IP here:
    // https://ipapi.co/api/?javascript#location-of-clients-ip 
    const IP_URL = "https://ipapi.co/json/";

    // retrieve location for your IP address formatted as JSON
    const getMyIp = async () => {               
        try {
            const res = await fetch(IP_URL);
            const json = await res.json();
            return json;
        }
        catch (error) { 
            console.log(error); 
        }    
    }

    return { getMyIp };
}

export default utils;
