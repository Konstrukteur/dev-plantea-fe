import utils from "../services/utils.jsx";

// Integration tests to check for expected data structure from backend

describe("getting data from a plant", () => {
  // arrange
  const { getSinglePlant, getSinglePlantByName, getSinglePlantByLocalName } = utils();
  // only check for properties most relevant for the frontend
  const expectedSchema = {
    binominal_name: expect.any(String),
    common_name: expect.any(String),
    edible_uses: expect.any(String),
    filename: expect.any(String),
    image_id: expect.any(Number),
    specieId: expect.any(Number),
  };

  test("test function to fetch plant data", async () => {
    // act
    const result = await getSinglePlant(13);

    // assert
    //expect(result).toEqual(expectedSchema); // to evaluate full schema
    assertSchemaProps(result, expectedSchema);
  });

  test("test function to fetch plant data by name", async () => {
    //act
    const result = await getSinglePlantByName("Anethum graveolens");

    //assert
    assertSchemaProps(result, expectedSchema);
  });

  test("test function to fetch plant data by local name", async () => {
    //act
    const result = await getSinglePlantByLocalName("Dill");

    //assert
    assertSchemaProps(result, expectedSchema);
  });

  // helper function
  const assertSchemaProps = (result, expectedSchema) => {
    expect(result.binominal_name).toEqual(expectedSchema.binominal_name);
    expect(result.common_name).toEqual(expectedSchema.common_name);
    expect(result.edible_uses).toEqual(expectedSchema.edible_uses);
    expect(result.filename).toEqual(expectedSchema.filename);
    expect(result.image_id).toEqual(expectedSchema.image_id);
    expect(result.specieId).toEqual(expectedSchema.specieId);
  }

});
