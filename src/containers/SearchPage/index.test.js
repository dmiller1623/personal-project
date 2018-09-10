import React from 'react'
import { shallow } from 'enzyme'
import { mapStateToProps, mapDispatchToProps, SearchPage } from '../SearchPage'
import { searchRelated } from '../../actions';

describe('SearchPage', () => {
  let wrapper
  it('should match the snapshot', () => {
    wrapper = shallow(<SearchPage store={{}}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should call ')

  describe('mapStateToProps', () => {
    it('should return an array of related items', () => {
      const mockState = {
        relatedSearches: [],
        selectedItems: []
      }

      const expected = {
        relatedSearches: []
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function MDTP', () => {

      const mockDispatch = jest.fn();
      const actionToDispatch = searchRelated();
      const mappedProps = mapDispatchToProps(mockDispatch);
  
      mappedProps.searchRelated();
  
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
    })
})