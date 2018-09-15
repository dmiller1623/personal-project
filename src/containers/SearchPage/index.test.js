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

  it('should call handle submit when a letter is pressed', () => {
    let eventObject = { target: { name: 'search', value: 'a' } }
    wrapper = shallow(<SearchPage store={{}}/>)

    wrapper.find('input').simulate('change', eventObject)
    expect(wrapper.state('search')).toEqual('a')
  })

  // it('should call search related when clicking on submit', () => {
  //   let searchRelatedMock = jest.fn()
  //   wrapper = shallow(<SearchPage searchRelated={searchRelatedMock}/>)

  //   wrapper.find('button').simulate('click')
  //   expect(searchRelatedMock).toHaveBeenCalled()

  // })

  it('should call addToResources when add resources is called', () => {
    let mockResource = { name: 'jim morrison' }
    let mockAddtionalResources = []
    let mockAddToResources = jest.fn()
    wrapper = shallow(<SearchPage additionalResources={mockAddtionalResources} addToResources={mockAddToResources}/>)
    wrapper.instance().addResources(mockResource)

    expect(mockAddToResources).toHaveBeenCalledWith(mockResource)

  })

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