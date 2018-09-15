import React from 'react'
import { shallow } from 'enzyme'
import { mapStateToProps, mapDispatchToProps, SelectedItems } from '../SelectedItems'
import { removeResource } from '../../actions'

describe('SelectedItems', () => {
  let wrapper
  describe('SelectedItems Container', () => {
    it('should match the snapshot', () => {
      wrapper = shallow(<SelectedItems store={{}}/>)
      expect(wrapper).toMatchSnapshot()
      
    })
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