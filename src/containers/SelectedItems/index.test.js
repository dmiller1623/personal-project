import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps, SelectedItems } from '../SelectedItems';
import { removeResource } from '../../actions';

describe('SelectedItems', () => {
  let wrapper;
  describe('SelectedItems Container', () => {
    it('should match the snapshot', () => {
      wrapper = shallow(<SelectedItems store={{}}/>);
      expect(wrapper).toMatchSnapshot();
      
    });

    it('should call removeResources when deleteResources is called', () => {
      const resource = { name: 'jim morrison'};
      const additionalResources = ['jim morrison'];
      const removeResourceMock = jest.fn();
      wrapper = shallow(<SelectedItems additionalResources={additionalResources} removeResource={removeResourceMock}/>);

      wrapper.instance().deleteResources(resource);
      expect(removeResourceMock).toHaveBeenCalled();
    });

    it('should not call removeResources if the resource down not exsist', () => {
      const resource = { name: 'jim morrison'};
      const additionalResources = [];
      const removeResourceMock = jest.fn();
      wrapper = shallow(<SelectedItems additionalResources={additionalResources} removeResource={removeResourceMock}/>);

      wrapper.instance().deleteResources(resource);
      expect(removeResourceMock).not.toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an array of additional resources', () => {
      const store = {
        searchedResources: [],
        additionalResources: []
      };
  
      const expected = {
        additionalResources: []
      };
  
      const mappedProps = mapStateToProps(store);
      expect(mappedProps).toEqual(expected);

    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function MTDP', () => {
      const mockedDispatch = jest.fn();
      const actionToDispatch = removeResource();
      const mappedProps = mapDispatchToProps(mockedDispatch);

      mappedProps.removeResource();
      expect(mockedDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

  });

});