import addResourcesReducer  from './addResourcesReducer';
import * as actions from '../actions';

describe('addResourcesReducer', () => {
  it('should return the intital state', () => {
    const expected = []

    const results = addResourcesReducer(undefined, {})

    expect(results).toEqual(expected)
  })

  it('should return an array of resources', () => {
    const mockData = {
        Name: 'The doors',
        Type: 'music',
        wTeaser: 'lfnewklnfmwe',
        wUrl:'asmcdaklnc',
        yId: 12,
        yUrl: 'cwcewc'
    }

    const expected = [
      {
        Name: 'The doors',
        Type: 'music',
        wTeaser: 'lfnewklnfmwe',
        wUrl:'asmcdaklnc',
        yId: 12,
        yUrl: 'cwcewc'
      }
    ]

    const results = addResourcesReducer(undefined, actions.addToResources(mockData))

    expect(results).toEqual(expected)
  })

  it('should return a resource to delete', () => {
    const initialState = [{ name: 'jim morrison'}, { name: 'the doors'} ]
    const resource = { name: 'the doors'}
    const expected = { name: 'the doors'}

    const results = addResourcesReducer(initialState, actions.removeResource(resource))

    expect(results).toEqual(expected)
  })
})