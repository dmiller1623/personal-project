import React from 'react'
import { shallow } from 'enzyme'
import SelectedItemsContainer from '../SelectedItemsContainer'
import SelectedCard from '../SelectedCard'

describe('SelectedItemsContainer', () => {
  let wrapper
  let additionalResources = []
  let deleteResources = jest.fn()
  it('should match the snapshot', () => {
    wrapper = shallow(<SelectedItemsContainer additionalResources={additionalResources} deleteResources={deleteResources}/>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the same amount of Selected Cards', () => {
    let additionalResources = [{ name: 'jim morrision' }, { name: 'the doors' }]
    wrapper = shallow(<SelectedItemsContainer additionalResources={additionalResources} deleteResources={deleteResources}/>)

    expect(wrapper.find(SelectedCard).length).toEqual(2)
  })
})