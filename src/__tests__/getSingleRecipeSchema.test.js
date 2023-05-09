import utils from "../services/utils.jsx";

// Integration test checks for expected data structure from backend

describe("getting data for a recipe", () => {
  // arrange
  const { getSingleRecipe, getSingleRecipeByName } = utils();
  // expected result: recipe with at least two ingredients
  const expectedSchema = {
    idMeal: expect.any(Number),
    strIngredient1: expect.any(String),
    strIngredient2: expect.any(String),
    strInstructions: expect.any(String),
    strMeal: expect.any(String),
    strMealThumb: expect.any(String),
    strMeasure1: expect.any(String),
    strMeasure2: expect.any(String),
  };

  test("test function to fetch and return data essential for frontend", async () => {
    // act
    const result = await getSingleRecipe(52865);

    // assert
    assertSchemaProps(result, expectedSchema);
  });

  test("test function to fetch and return data essential for frontend", async () => {
    // act
    const result = await getSingleRecipeByName("Matar Paneer");

    // assert
    assertSchemaProps(result, expectedSchema);
  });

  // helper function
  const assertSchemaProps = (result, expectedSchema) => {
    expect(result.idMeal).toEqual(expectedSchema.idMeal);
    expect(result.strIngredient1).toEqual(expectedSchema.strIngredient1);
    expect(result.strIngredient2).toEqual(expectedSchema.strIngredient2);
    expect(result.strMeal).toEqual(expectedSchema.strMeal);
    expect(result.strMealThumb).toEqual(expectedSchema.strMealThumb);
    expect(result.strMeasure1).toEqual(expectedSchema.strMeasure1);
    expect(result.strMeasure2).toEqual(expectedSchema.strMeasure2);
  }

});
