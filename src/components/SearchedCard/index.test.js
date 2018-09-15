import React from 'react'
import SearchedCard from '../SearchedCard'
import { shallow } from 'enzyme'


describe('SearchedCard', () => {
  let wrapper 
  it('should match the snapshot', () => {
    wrapper = shallow(<SearchedCard />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should call add resources when the add button is clicked', () => {
    let addResources = jest.fn()
    wrapper = shallow(<SearchedCard addResources={addResources}/>)

    wrapper.find('img').simulate('click')
    expect(addResources).toHaveBeenCalled()
  })

})