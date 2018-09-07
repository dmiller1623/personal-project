import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getRelatedData } from '../../utilities/apiCalls/apiCalls';
import { searchRelated } from '../../actions'

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
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
//   relatedSearches: state.relatedSearches
// })

const mapDispatchToProps = (dispatch) => ({
  searchRelated: (search) => dispatch(searchRelated(search))
})

export default connect(undefined, mapDispatchToProps)(SearchPage)