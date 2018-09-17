import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getRelatedData } from '../../utilities/apiCalls/apiCalls';
import { searchRelated, addToResources } from '../../actions'
import RelatedItemsContainer from '../../components/RelatedItemsContainer'
import { NavLink } from 'react-router-dom';
import './styles.css'


export class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  handleSubmit = async () => {
    const results = await getRelatedData(this.state.search)
    this.props.searchRelated(results)
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  addResources = (resource) => {
    let additionalResourcesNames = this.props.additionalResources.map(resource => resource.Name)
    if(additionalResourcesNames.includes(resource.Name)) {
      return 
    } else {
      this.props.addToResources(resource)
    }
  } 

  render() {
    return(
      <div className='search-page'>
        <div className='search-form'>
          <input className='search-input'
          type='text'
          name='search'
          onChange={this.handleChange}
          placeholder='search for resources'
          />
          <button className='search-button' onClick={this.handleSubmit}>Search</button>
          <NavLink className='selected-resources-button' to='/selectedResources'>View Selected Resources</NavLink>
        </div>
      <div className='searched-cards'>
        <RelatedItemsContainer relatedSearches={this.props.relatedSearches} addResources={this.addResources}/>
      </div>
    </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  relatedSearches: state.relatedSearches,
  additionalResources: state.additionalResources
})

export const mapDispatchToProps = (dispatch) => ({
  searchRelated: (search) => dispatch(searchRelated(search)),
  addToResources: (resourceId) => dispatch(addToResources(resourceId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)