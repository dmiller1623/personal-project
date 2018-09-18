import React from 'react';
import SearchedCard from '../../components/SearchedCard';
import './styles.css';

const RelatedItemsContainer = ({ relatedSearches, addResources }) => {
  const displayItems = relatedSearches.map((item, index) => {
    return <SearchedCard 
      {...item}
      key={index}
      addResources={addResources}
    />;
  });

  return(
    <div className='related-items-container'>
      {displayItems}
    </div>
  );
};
  
export default RelatedItemsContainer;