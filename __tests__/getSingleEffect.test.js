import utils from "../services/utils.jsx"; 
import { fetchData } from '../src/services/__mocks__/fetch.js';
jest.mock('../src/services/__mocks__/fetch.js');

describe('getting data for an effect', () => {
  test('test function to fetch and return data essential for frontend', async () => {
    const { getSingleEffect } = utils();

    //arrange
    const mockResult = {      
      id: 4,
      name: "Alterative",
      description: "Causes a gradual beneficial change in the body", // check only for start of description string! 
    };

    const expectedResult = mockResult.name;
    fetchData.mockResolvedValue(mockResult);

    //act
    const result = await getSingleEffect().name;

    //assert
    expect(result).toBe(expectedResult);
  });
});
