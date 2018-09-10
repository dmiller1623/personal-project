import searchReducer  from './searchReducer';
import * as actions from '../actions';

describe('searchReducer', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = searchReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should add some related searches to state', () => {
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

    const result = searchReducer(undefined, actions.searchRelated(mockData))
    expect(result).toEqual(mockData)
  })
})