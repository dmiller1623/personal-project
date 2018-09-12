import React from 'react'
import SelectedCard from '../SelectedCard'
import { NavLink } from 'react-router-dom'

const SelectedItemsContainer = ({ additionalResources, deleteResources }) => {
  const displayResources = additionalResources.map((resource, index) => {
    return <SelectedCard 
    {...resource}
    key={index}
    deleteResources={deleteResources}
    />
  })

  return (
    <div>
      {displayResources}
      <NavLink to='/QrcodePage'>Generate Qr Code</NavLink>
    </div>
  )
}

export default SelectedItemsContainer