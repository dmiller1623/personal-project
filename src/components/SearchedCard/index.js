import React from 'react'

const SearchedCard = ({ Name, Type, wTeaser, wUrl, yID, yUrl }) => {
  return (
    <div>
      <h2>{Type}</h2>
      <h2>{Name}</h2>
      <h2>{wTeaser}</h2>
      <h2>{wUrl}</h2>
      <h2>{yID}</h2>
      <h2>{yUrl}</h2>
    </div>
  )
}

export default SearchedCard