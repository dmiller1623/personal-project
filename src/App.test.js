import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';
import { mapStateToProps, App } from './App.js'
import { searchRelated } from './actions/index.js';

describe('App component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <App />
      </BrowserRouter>);

    expect(wrapper).toMatchSnapshot();
  });
  describe('mapStateToProps', () => {
    it('should return an array of additional resources', () => {

      const store = {
        additionalResources: [],
        relatedResources: []
      }
  
      const expected = {
        additionalResources: []
      }
  
      const mappedProps = mapStateToProps(store)
      expect(mappedProps).toEqual(expected);
    })
  })
  
})