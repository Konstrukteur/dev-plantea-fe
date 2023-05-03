import utils from "../services/utils.jsx"; 
import { fetchData } from '../src/services/__mocks__/fetch.js';
jest.mock('../src/services/__mocks__/fetch.js');

describe('getting data for a recipe', () => {
  test('test function to fetch and return data essential for frontend', async () => {
    const { getSingleRecipe } = utils();
    
    //arrange
    const mockResult = {           
      idMeal: 52865,
      strIngredient3: "Ginger",
      strIngredient4: "Cumin",
      strInstructions: "Heat the oil in a frying pan",  // check for beginning of string only!
      strMeal: 'Matar Paneer', 
      strMealThumb: "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg",
      strMeasure1: "1 tbls",
      strMeasure2: "225g"
    };

    const expectedResult = mockResult.idMeal;
    fetchData.mockResolvedValue(mockResult);

    //act
    const result = await getSingleRecipe().idMeal;

    //assert
    expect(result).toBe(expectedResult);
  });
});
