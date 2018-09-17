import React from 'react'
import { shallow } from 'enzyme'
import { mapStateToProps, mapDispatchToProps, SearchPage } from '../SearchPage'
import { searchRelated, addToResources } from '../../actions';
import { mockSearchData } from '../../utilities/apiCalls/mockData'


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

  it('should call search related when clicking on submit', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockSearchData)
    }));
    let searchRelatedMock = jest.fn()
    wrapper = shallow(<SearchPage searchRelated={searchRelatedMock}/>)
    
    await (wrapper).instance().handleSubmit()
    expect(searchRelatedMock).toHaveBeenCalled()

  })

  it('should call addToResources when add resources is called', () => {
    let mockResource = { name: 'jim morrison' }
    let mockAddtionalResources = []
    let mockAddToResources = jest.fn()
    wrapper = shallow(<SearchPage additionalResources={mockAddtionalResources} addToResources={mockAddToResources}/>)
    wrapper.instance().addResources(mockResource)

    expect(mockAddToResources).toHaveBeenCalledWith(mockResource)

  })

  it('should not call addToResources if the item already exsits', () => {
    let mockResource = { name: 'jim morrison' }
    let mockAddtionalResources = [{ name: 'jim morrison'}]
    let mockAddToResources = jest.fn()
    wrapper = shallow(<SearchPage additionalResources={mockAddtionalResources} addToResources={mockAddToResources}/>)
    wrapper.instance().addResources(mockResource)

    expect(mockAddToResources).not.toHaveBeenCalledWith(mockResource)

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

    it('should call dispatch when using a function MDTP', () => {

      const mockDispatch = jest.fn();
      const actionToDispatch = addToResources();
      const mappedProps = mapDispatchToProps(mockDispatch);
  
      mappedProps.addToResources();
  
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})