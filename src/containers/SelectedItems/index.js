import React, { Component } from 'react'
import { connect } from 'react-redux';
import SelectedItemsContainer from '../../components/SelectedItemsContainer'
import { removeResource } from '../../actions'
import './styles.css'

export class SelectedItems extends Component{

  deleteResources = (resource) => {
    const resourceNames = this.props.additionalResources.map(resource => resource.Name)
    if(resourceNames.includes(resource.Name)) {
       let additionalResources = this.props.additionalResources.filter(name => {
        return name.Name !== resource.Name
      })
      this.props.removeResource(additionalResources)
    } 
  }

  render() {
    const { additionalResources } = this.props
    return(
      <div className='selected-container'>
        <SelectedItemsContainer additionalResources={additionalResources} deleteResources={this.deleteResources}/>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  additionalResources: state.additionalResources
})

export const mapDispatchToProps = (dispatch) => ({
  removeResource: (resource) => dispatch(removeResource(resource))
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectedItems)