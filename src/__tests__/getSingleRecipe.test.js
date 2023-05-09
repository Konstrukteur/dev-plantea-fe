import utils from "../services/utils.jsx";

// Integration test checks for exact data using one specific example

describe("getting data for a recipe", () => {
  //arrange
  const { getSingleRecipe, getSingleRecipeByName } = utils();
  // spot test for specific properties
  const expectedResult = {
    idMeal: 52865,
    strIngredient3: "Ginger",
    strIngredient4: "Cumin",
    strInstructions: "Heat the oil in a frying pan", // check for beginning of string only!
    strMeal: "Matar Paneer",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg",
    strMeasure1: "1 tbls",
    strMeasure2: "225g",
  };

  test("test function to fetch data for specific recipe", async () => {
    //act
    const result = await getSingleRecipe(52865);

    //assert
    assertSchemaValues(result, expectedResult);
  });

  test("test function to fetch data for specific recipe by name", async () => {
    //act
    const result = await getSingleRecipeByName("Matar Paneer");

    //assert
    assertSchemaValues(result, expectedResult);
  });

  // helper function
  const assertSchemaValues = (result, expectedResult) => {
    expect(result.idMeal).toBe(expectedResult.idMeal);
    expect(result.strIngredient3).toBe(expectedResult.strIngredient3);
    expect(result.strIngredient4).toBe(expectedResult.strIngredient4);
    //expect(result.strInstructions).toContain(expectedResult.strInstructions);
    expect(result.strMeal).toBe(expectedResult.strMeal);
    expect(result.strMealThumb).toBe(expectedResult.strMealThumb);
    expect(result.strMeasure1).toBe(expectedResult.strMeasure1);
    expect(result.strMeasure2).toBe(expectedResult.strMeasure2);
  };
});
