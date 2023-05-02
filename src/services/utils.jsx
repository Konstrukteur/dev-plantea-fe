const utils = () => {

    // Find API description for getting user IP here:
    // https://ipapi.co/api/?javascript#location-of-clients-ip 
    const IP_URL = "https://ipapi.co/json/";
    const BASEURL = "https://plantea.aladlabs.net/api/v1/";
    const PLANTS_BASEURL = BASEURL + "species/";
    const HARVEST = "harvesting/";
    const BLOSSOM = "blossoming/";
    const NORTHERNHEMISPHERE = "n/";
    const SOUTHERNHEMISPHERE = "s/";  
    const PLANT_COUNT = "count/countSpecies";
    // use recipes from public API:
    const RECIPES_BASEURL = BASEURL + "apirecipes/";
    // use recipes from own DB:
    //const RECIPES_BASEURL = BASEURL + "recipes/";
    const EFFECTS_BASEURL = BASEURL + "effects/";
    const GETBYNAME = "get-by-name/";
    const GETBYINGREDIENT = "get-by-ingredient/";

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

    // returns all plants that are available in the current season (default) and specified area
    const getPlants = async (hemisphere = "n") => {
        const url = PLANTS_BASEURL + HARVEST + getHemisphere(hemisphere);
        return getAllData(url);
    };

    const getPlantsPerPage = async (pageNo = 1, pageSize = 10, hemisphere = "n") => {
        const url = PLANTS_BASEURL + HARVEST + getHemisphere(hemisphere);
        const query = `?page=${pageNo}&pageSize=${pageSize}`;
        console.log(url + query)
        return getAllData(url + query);
    };

    const getBlossomingPlants = async (hemisphere = "n") => {
        const url = PLANTS_BASEURL + BLOSSOM + getHemisphere(hemisphere);
        return getAllData(url);
    };

    const getSinglePlant = async (id) => {
        return getSingleData(PLANTS_BASEURL, id);
    };

    const getSinglePlantByName = async (name) => {
        return getByName(PLANTS_BASEURL, name);
    };

    const getRecipes = async () => {
        // !!! fake recipe list for now with ingredient-based recipes
        return getRecipesByIngredient("tomato")
        // todo - update when available from BE
        //return getAllData(RECIPES_BASEURL);
    };

    const getSingleRecipe = async (id) => {
        return getSingleData(RECIPES_BASEURL, id);
    };

    const getSingleRecipeByName = async (name) => {
        return getByName(RECIPES_BASEURL, name);
    };

    const getEffects = async () => {
        return getAllData(EFFECTS_BASEURL);
    };

    const getSingleEffect = async (id) => {
        return getSingleData(EFFECTS_BASEURL, id);
    };

    const getSingleEffectByName = async (name) => {
        return getByName(EFFECTS_BASEURL, name);
    };

    // returns number of plants available
    const getPlantCount = async () => {
        try {
            const response = await fetch(PLANTS_BASEURL + PLANT_COUNT);
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error.message);
        }
    }

    // returns all recipes for the specified ingredient
    const getRecipesByIngredient = async (ingredient) => {
        try {
            const response = await fetch(RECIPES_BASEURL + GETBYINGREDIENT + ingredient);
            const json = await response.json();
            const recipes = json.map(element => element[0])
            return recipes;
        } catch (error) {
            console.log(error.message);
        }
    };

    // -------------------- private helper functions -------------------------

    // returns URL snippet for selected hemisphere ("north or south")
    const getHemisphere = (hemi) => {       
        return hemi.toLowerCase() === "n" || "north" ? NORTHERNHEMISPHERE : SOUTHERNHEMISPHERE;
    }

    // returns all plants/effects for the specified URL
    const getAllData = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            return json.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    // returns one plant/recipe/effect with the specified id
    const getSingleData = async (baseUrl, id) => {
        try {
            const response = await fetch(baseUrl + id);
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error.message);
        }
    }

    // returns one plant/recipe/effect with the specified name
    const getByName = async (baseUrl, name) => {
        try {
            const response = await fetch(baseUrl + GETBYNAME + name);
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error.message);
        }
    }

    return { getMyIp, getPlants, getPlantsPerPage, getBlossomingPlants, getSinglePlant, getSinglePlantByName, getRecipes, getSingleRecipe, getSingleRecipeByName, getEffects, getSingleEffect, getSingleEffectByName, getPlantCount, getRecipesByIngredient };
}

export default utils;
