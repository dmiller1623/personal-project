import React from 'react'
// import { addToResources } from '../../actions';

const SearchedCard = (props) => {
  return (
    <div>
      <article className='searhced-card' onClick={() => props.addResources(props)}>
        <h2>{props.Type}</h2>
        <h2>{props.Name}</h2>
        <h2>{props.wTeaser}</h2>
        <h2>{props.wUrl}</h2>
        <h2>{props.yID}</h2>
        <h2>{props.yUrl}</h2>
      </article>
    </div>
  )
}

export default SearchedCard