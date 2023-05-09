import utils from "../services/utils.jsx";

// Integration test checks for expected data structure from backend

describe("getting data for an effect", () => {
  // arrange
  const { getSingleEffect } = utils();
  const expectedSchema = {
    Condition: expect.any(Object),
    condition_id: expect.any(Number),
    id: expect.any(Number),
    name: expect.any(String),
    description: expect.any(String),
    created_at: expect.any(String),
    updated_at: expect.any(String)
  };

  test("test function to fetch and return data essential for frontend", async () => {
    // act
    const result = await getSingleEffect(56);

    // assert
    expect(result).toEqual(expectedSchema);
  });
});
