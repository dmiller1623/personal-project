import React from 'react'
import SelectedCard from '../SelectedCard'

const SelectedItemsContainer = ({ additionalResources }) => {
  const displayResources = additionalResources.map((resource, index) => {
    return <SelectedCard 
    {...resource}
    key={index}
    />
  })

  return (
    <div>
      {displayResources}
    </div>
  )
}

export default SelectedItemsContainer