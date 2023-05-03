import utils from "../services/utils.jsx"; 
import { fetchData } from '../src/services/__mocks__/fetch.js';
jest.mock('../src/services/__mocks__/fetch.js');

describe('getting data from a plant', () => {
  test('test function to fetch and return data essential for frontend', async () => {
    const { getSinglePlant } = utils();
    
    //arrange
    const mockResult = {      
      binominal_name: "Anethum graveolens",
      common_name: 'Dill',
      edible_uses: "Leaves - raw or cooked", // check for start of edible_uses string only!
      filename: "anethum_graveolens.jpg",
      image_id: 13,
      species_id: 13
    };

    const expectedResult = mockResult.common_name;
    fetchData.mockResolvedValue(mockResult);

    //act
    const result = await getSinglePlant().common_name;

    //assert
    expect(result).toBe(expectedResult);
  });
});
