import utils from "../services/utils.jsx";

// Integration test checks for exact data using one specific example

describe("getting data from a plant", () => {
  // arrange
  const { getSinglePlant, getSinglePlantByName, getSinglePlantByLocalName } = utils();
  const expectedResult = {
    binominal_name: "Anethum graveolens",
    common_name: "Dill",
    edible_uses: "Leaves - raw or cooked", // check for start of edible_uses string only!
    filename: "anethum_graveolens.jpg",
    image_id: 13,
    specieId: 13,
  };

  test("test function to fetch data for specific plant", async () => {
    //act
    const result = await getSinglePlant(13);

    //assert
    assertSchemaValues(result, expectedResult);
  });

  test("test function to fetch data for specific plant by name", async () => {
    //act
    const result = await getSinglePlantByName("Anethum graveolens");

    //assert
    assertSchemaValues(result, expectedResult);
  });

  test("test function to fetch data for specific plant by name", async () => {
    //act
    const result = await getSinglePlantByLocalName("Dill");

    //assert
    assertSchemaValues(result, expectedResult);
  });

  // helper function
  const assertSchemaValues = (result, expectedResult) => { 
    expect(result.binominal_name).toBe(expectedResult.binominal_name);
    expect(result.common_name).toBe(expectedResult.common_name);
    expect(result.edible_uses).toContain(expectedResult.edible_uses);
    expect(result.filename).toBe(expectedResult.filename);
    expect(result.image_id).toBe(expectedResult.image_id);
    expect(result.specieId).toBe(expectedResult.specieId);
  }

});
