import React from 'react';
import { shallow } from 'enzyme';
import RelatedItemsContainer from '../RelatedItemsContainer';
import SearchedCard from '../../components/SearchedCard';


describe('RelatedItemsContainer', () => {
  let wrapper;
  let relatedSearches;
  let addResources;

  it('should match the snapshot', () => {
    relatedSearches = [];
    addResources = jest.fn();
    wrapper = shallow(<RelatedItemsContainer relatedSearches={relatedSearches} addResources={addResources}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the same amount of Searched cards', () => {
    relatedSearches = [{ name: 'jim morrison' }, { name: 'the doors' }];
    addResources = jest.fn();
    wrapper = shallow(<RelatedItemsContainer relatedSearches={relatedSearches} addResources={addResources}/>);

    expect(wrapper.find(SearchedCard).length).toEqual(2);
  });

});