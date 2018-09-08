import React from 'react'
import SearchedCard from '../../components/SearchedCard'

const RelatedItemsContainer = (items) => {
    const displayItems = items.relatedSearches.map((item, index) => {
      return <SearchedCard 
      {...item}
      key={index}
      />
    })

    return(
      <div>
        {displayItems}
      </div>
    )
  }
  


export default RelatedItemsContainer