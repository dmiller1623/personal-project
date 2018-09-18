import { getRelatedData } from './apiCalls';
import { mockSearchData } from './mockData';

describe('getRelatedData', () => {
  it('fetch should be called when the user searches', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockSearchData)
    })); 
    await getRelatedData();
    expect(window.fetch).toHaveBeenCalled();
  });


  it('should throw an error if the status is not ok', async () => {
    const errorMessage = new Error('boo');
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(errorMessage));
    
    await expect(getRelatedData()).rejects.toEqual(errorMessage);
  });
});