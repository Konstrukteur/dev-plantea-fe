import utils from "../services/utils.jsx";

// Integration test checks for expected data structure from backend

describe("getting data for all items", () => {
  // arrange
  // expect array with objects
  const { getPlants, getRecipes, getEffects } = utils();

  test("test function to fetch data for all plants", async () => {
    // act
    const result = await getPlants("north");

    // assert
    result.map((el) =>
      expect(typeof el === "object" && !Array.isArray(el)).toBe(true)
    );
  });

  test("test function to fetch data for all recipes", async () => {
    // act
    const result = await getRecipes();

    // assert
    result.map((el) =>
      expect(typeof el === "object" && !Array.isArray(el)).toBe(true)
    );
  });

  test("test function to fetch data for all effects", async () => {
    // act
    const result = await getEffects();

    // assert
    result.map((el) =>
      expect(typeof el === "object" && !Array.isArray(el)).toBe(true)
    );
  });
});
