import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRelatedData } from '../../utilities/apiCalls/apiCalls';
import { searchRelated, addToResources } from '../../actions';
import RelatedItemsContainer from '../../components/RelatedItemsContainer';
import { NavLink } from 'react-router-dom';
import './styles.css';
import PropTypes from 'prop-types';

export class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  handleSubmit = async () => {
    const results = await getRelatedData(this.state.search);
    this.props.searchRelated(results);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  addResources = (resource) => {
    const { additionalResources, addToResources } = this.props;
    let additionalResourcesNames = additionalResources.map(resource => resource.Name);
    if (additionalResourcesNames.includes(resource.Name)) {
      return;
    } else {
      addToResources(resource);
    }
  } 

  render() {
    if (!this.props.relatedSearches.length) {
      return (
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
          <div className='welcome-heading'>
            <h2 className='welcome'>Welcome to Outsourced. Outsourced is a site designed to allow the user to search for related resources based on your search.
                Start out by searching a book, movie, or music and click the add button to add them to your additional resources.
                You can create a QR code for your users to scan on the additional resources page.
            </h2>
          </div>
        </div>
      ); 
    } else {
      return (
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
      );
    } 
  }
}

SearchPage.propTypes = {
  addResources: PropTypes.func,
  addToResources: PropTypes.func,
  searchRelated: PropTypes.func,
  additionalResources: PropTypes.array,
  deleteResources: PropTypes.func,
  removeResource: PropTypes.func,
  relatedSearches: PropTypes.array
};

export const mapStateToProps = (state) => ({
  relatedSearches: state.relatedSearches,
  additionalResources: state.additionalResources
});

export const mapDispatchToProps = (dispatch) => ({
  searchRelated: (search) => dispatch(searchRelated(search)),
  addToResources: (resourceId) => dispatch(addToResources(resourceId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);