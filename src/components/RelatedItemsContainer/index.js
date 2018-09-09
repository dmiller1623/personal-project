import React from 'react'
import SearchedCard from '../../components/SearchedCard'

const RelatedItemsContainer = ({ relatedSearches, addResources }) => {
  const displayItems = relatedSearches.map((item, index) => {
      return <SearchedCard 
      {...item}
      key={index}
      addResources={addResources}
      />
    })

    return(
      <div>
        {displayItems}
      </div>
    )
  }
  
export default RelatedItemsContainer