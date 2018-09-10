import React from 'react'
import './styles.css'
// import { addToResources } from '../../actions';

const SearchedCard = (props) => {
  return (
    <article className='searched-card' onClick={() => props.addResources(props)}>
      <div className='card-title'>
        <h2>{props.Type}</h2>
        <h2>{props.Name}</h2>
        <button>add</button>
      </div>
      <div className='card-info'>
        <div className='card-description'> 
          <p>{props.wTeaser}</p>
        </div>
        <div className='card-links'>
          <p>{props.yUrl}</p>
          <p>{props.wUrl}</p>
        </div>
      </div>
    </article>
  )
}

export default SearchedCard