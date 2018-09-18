import React from 'react';
import SelectedCard from '../SelectedCard';
import { shallow } from 'enzyme';


describe('SelectedCard', () => {
  let wrapper;
  it('should match the snapshot', () => {
    let yUrl = 'kscislkcn';
    wrapper = shallow(<SelectedCard  yUrl={yUrl}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call add resources when the add button is clicked', () => {
    let deleteResources = jest.fn();
    let yUrl = 'kscislkcn';

    wrapper = shallow(<SelectedCard yUrl={yUrl} deleteResources={deleteResources}/>);

    wrapper.find('img').simulate('click');
    expect(deleteResources).toHaveBeenCalled();
  });

});