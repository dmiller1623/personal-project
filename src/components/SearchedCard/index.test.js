import React from 'react'
import { shallow } from 'enzyme'
import { mapStateToProps, mapDispatchToProps, SearchedCard } from '../SearchedCard'
import { removeResource } from '../../actions'

describe('SearchedCard', () => {
  let wrapper 
  it('should match the snapshot', () => {
    wrapper = shallow(<SearchedCard />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should call remove resources when the delete button is clicked and something matches in the array', () => {
    let removeResource = jest.fn()
    let addResources = jest.fn()
    let additionalResources= [{ name: 'jim morrison' }]
    wrapper = shallow(<SearchedCard addResources={addResources} additionalResources={additionalResources} removeResource={removeResource}/>)

    wrapper.find('img').simulate('click')
    expect(removeResource).toHaveBeenCalled()
  })

  it('should call add resources when the add button is clicked and a match is not in the array', () => {
    let removeResource = jest.fn()
    let addResources = jest.fn()
    let resource = { name: 'jim morrison' }
    let additionalResources= []
    wrapper = shallow(<SearchedCard addResources={addResources} additionalResources={additionalResources} removeResource={removeResource}/>)

    wrapper.find('img').simulate('click')
    expect(addResources).toHaveBeenCalled()
  })

  describe('mapStateToProps', () => {
    it('should return an array of additional resources', () => {
      const store = {
        searchedResources: [],
        additionalResources: []
      }
  
      const expected = {
        additionalResources: []
      }
  
      const mappedProps = mapStateToProps(store)
      expect(mappedProps).toEqual(expected)

    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function MTDP', () => {
      const mockedDispatch = jest.fn()
      const actionToDispatch = removeResource()
      const mappedProps = mapDispatchToProps(mockedDispatch)

      mappedProps.removeResource()
      expect(mockedDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

  })

})