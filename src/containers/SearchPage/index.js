import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getRelatedData } from '../../utilities/apiCalls/apiCalls';
import { searchRelated, addToResources } from '../../actions'
import RelatedItemsContainer from '../../components/RelatedItemsContainer'

class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      subject: '',
      search: ''
    }
  }

  handleSubmit = async () => {
    const results = await getRelatedData(this.state.search)
    console.log(results)
    this.props.searchRelated(results)
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  addResources = (resource) => {
    this.props.addToResources(resource)
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
        <button onClick={this.handleSubmit}>Searchs</button>
        <RelatedItemsContainer relatedSearches={this.props.relatedSearches} addResources={this.addResources}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  relatedSearches: state.relatedSearches
})

const mapDispatchToProps = (dispatch) => ({
  searchRelated: (search) => dispatch(searchRelated(search)),
  addToResources: (resourceId) => dispatch(addToResources(resourceId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)