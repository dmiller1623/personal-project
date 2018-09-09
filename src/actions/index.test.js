import * as actions from '../actions';

describe('Actions', () => {
 const mockData = [
   {
     Name: 'The doors',
     Type: 'music',
     wTeaser: 'lfnewklnfmwe',
     wUrl:'asmcdaklnc',
     yId: 12,
     yUrl: 'cwcewc'
   }
 ]
  it('should return a type search related with related items', () => {
    const expected = {
        type: 'SEARCH_RELATED',
        searchedRelated: [{
          Name: 'The doors',
          Type: 'music',
          wTeaser: 'lfnewklnfmwe',
          wUrl:'asmcdaklnc',
          yId: 12,
          yUrl: 'cwcewc'
        }]
      }
    
    const result = actions.searchRelated(mockData);
    expect(result).toEqual(expected);
  })
})