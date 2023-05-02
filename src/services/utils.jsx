const utils = () => {

    // Find API description for getting user IP here:
    // https://ipapi.co/api/?javascript#location-of-clients-ip 
    const IP_URL = "https://ipapi.co/json/";
    const BASEURL = "https://plantea.aladlabs.net/api/v1/";
    const PLANTS_BASEURL = BASEURL + "species/";
    const PLANTS_HARVESTNORTH = PLANTS_BASEURL + "harvesting/n/";
    const RECIPES_BASEURL = BASEURL + "recipes/";
    const EFFECTS_BASEURL = BASEURL + "effects/";

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

    const getPlants = async () => {
        return getAllData(PLANTS_HARVESTNORTH);
    };

    const getSinglePlant = async (id) => {
        return getSingleData(PLANTS_BASEURL, id);
    };

    const getRecipes = async () => {
        return getAllData(RECIPES_BASEURL);
    };

    const getSingleRecipe = async (id) => {
        return getSingleData(RECIPES_BASEURL, id);       
    };

    const getEffects = async () => {
        return getAllData(EFFECTS_BASEURL);
    };

    const getSingleEffect = async (id) => {
        return getSingleData(EFFECTS_BASEURL, id);        
    };

    const getAllData = async (baseUrl) => {
        try {
            const response = await fetch(baseUrl);
            const json = await response.json();
            return json.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    const getSingleData = async (baseUrl, id) => {
        try {
            const response = await fetch(baseUrl + id);
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error.message);
        }
    }

    return { getMyIp, getPlants, getSinglePlant, getRecipes, getSingleRecipe, getEffects, getSingleEffect };
}

export default utils;
