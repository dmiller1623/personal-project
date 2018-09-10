import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getRelatedData } from '../../utilities/apiCalls/apiCalls';
import { searchRelated, addToResources } from '../../actions'
import RelatedItemsContainer from '../../components/RelatedItemsContainer'

export class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      subject: '',
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
      <div className="dropdown">
        <input className='subject-search'
          type='text'
          name='subject'
          onChange={this.handleChange}
        />
        <input className='search'
          type='text'
          name='search'
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Search</button>
        <RelatedItemsContainer relatedSearches={this.props.relatedSearches} addResources={this.addResources}/>
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