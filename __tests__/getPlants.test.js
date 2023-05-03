import utils from "../services/utils.jsx"; 
import { fetchData } from '../src/services/__mocks__/fetch.js';
jest.mock('../src/services/__mocks__/fetch.js');

describe('getting data for all plants', () => {
  test('test function to fetch plant data for frontend', async () => {
    const { getPlants } = utils();
    
    //arrange
    // XXX how to check for array of objects?
    const mockResult = {      
      object: "ToDo",

    };

    const expectedResult = mockResult.common_name;
    fetchData.mockResolvedValue(mockResult);

    //act
    const result = await getPlants().xxx;

    //assert
    expect(result).toBe(expectedResult);
  });
});
